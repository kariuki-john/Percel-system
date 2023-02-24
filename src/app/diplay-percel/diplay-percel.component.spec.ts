import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayPercelComponent } from './diplay-percel.component';

describe('DiplayPercelComponent', () => {
  let component: DiplayPercelComponent;
  let fixture: ComponentFixture<DiplayPercelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplayPercelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplayPercelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
