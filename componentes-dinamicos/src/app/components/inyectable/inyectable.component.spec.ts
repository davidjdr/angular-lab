import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InyectableComponent } from './inyectable.component';

describe('InyectableComponent', () => {
  let component: InyectableComponent;
  let fixture: ComponentFixture<InyectableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InyectableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InyectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
