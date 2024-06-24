import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAtividadeComponent } from './consulta-atividade.component';

describe('ConsultaAtividadeComponent', () => {
  let component: ConsultaAtividadeComponent;
  let fixture: ComponentFixture<ConsultaAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAtividadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
