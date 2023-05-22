import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonConLinkComponent } from './boton-con-link.component';

describe('BotonConLinkComponent', () => {
  let component: BotonConLinkComponent;
  let fixture: ComponentFixture<BotonConLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonConLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonConLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
