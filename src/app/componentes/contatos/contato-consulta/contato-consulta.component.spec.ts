import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoConsultaComponent } from './contato-consulta.component';

describe('ContatoConsultaComponent', () => {
  let component: ContatoConsultaComponent;
  let fixture: ComponentFixture<ContatoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
