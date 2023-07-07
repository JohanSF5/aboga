import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbogadosPage } from './abogados.page';

describe('AbogadosPage', () => {
  let component: AbogadosPage;
  let fixture: ComponentFixture<AbogadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbogadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
