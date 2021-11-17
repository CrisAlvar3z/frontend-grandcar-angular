import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarfiltroComponent } from './sidebarfiltro.component';

describe('SidebarfiltroComponent', () => {
  let component: SidebarfiltroComponent;
  let fixture: ComponentFixture<SidebarfiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarfiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarfiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
