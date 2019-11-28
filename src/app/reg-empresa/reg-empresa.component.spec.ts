import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEmpresaComponent } from './reg-empresa.component';

describe('RegEmpresaComponent', () => {
  let component: RegEmpresaComponent;
  let fixture: ComponentFixture<RegEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
