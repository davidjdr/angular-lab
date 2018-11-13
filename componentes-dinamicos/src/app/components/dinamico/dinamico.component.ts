import { Component, ComponentFactoryResolver, Input, ReflectiveInjector, ViewChild, ViewContainerRef } from '@angular/core';
import { InyectableComponent } from '../inyectable/inyectable.component';

@Component({
  selector: 'app-dinamico',
  template: `<ng-template #dynamicComponentContainer></ng-template>`,
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent {

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  componentList: Array<any> = [];
  inputProviders: Array<any> = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  @Input() set componentData(nro: number) {

    if (!nro) {
      return;
    }

    for (let i = 0; i < this.componentList.length; i++) {
        this.componentList[i].destroy();
    }
    this.inputProviders = [];

    for (let i = 0; i < nro; i++) {
        let data = {
          component: InyectableComponent,
          inputs: {
            name: 'Dinámico ' + i
        }};

        if (data.inputs) {
          this.inputProviders.push( Object.keys(data.inputs)
            .map((inputName) => {
              return {
                provide: inputName,
                useValue: data.inputs[inputName]
              };
            }));
        }
        const resolvedInputs = ReflectiveInjector.resolve(this.inputProviders);
        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        const factory = this.componentFactoryResolver.resolveComponentFactory(data.component);
        const component = factory.create(injector);
        this.dynamicComponentContainer.insert(component.hostView);

        this.componentList.push(component);
    }

    console.log(this.componentList);
    console.log(this.inputProviders);
  }

}
