import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmincitasPage } from './admincitas.page';

describe('AdmincitasPage', () => {
  let component: AdmincitasPage;
  let fixture: ComponentFixture<AdmincitasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdmincitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
