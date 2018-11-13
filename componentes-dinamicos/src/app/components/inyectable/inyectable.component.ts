import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-inyectable',
  templateUrl: './inyectable.component.html',
  styleUrls: ['./inyectable.component.css']
})
export class InyectableComponent implements OnInit {

  name = "";

  constructor(private injector: Injector) { }

  ngOnInit() {
    this.name = this.injector.get('name');
  }

}
