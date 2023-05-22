import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoConLinkComponent } from './logo-con-link.component';

describe('LogoConLinkComponent', () => {
  let component: LogoConLinkComponent;
  let fixture: ComponentFixture<LogoConLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoConLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoConLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
