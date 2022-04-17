import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperwallComponent } from './paperwall.component';

describe('PaperwallComponent', () => {
  let component: PaperwallComponent;
  let fixture: ComponentFixture<PaperwallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperwallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
