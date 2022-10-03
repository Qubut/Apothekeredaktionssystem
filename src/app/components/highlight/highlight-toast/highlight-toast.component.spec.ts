import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightToastComponent } from './highlight-toast.component';

describe('HighlightToastComponent', () => {
  let component: HighlightToastComponent;
  let fixture: ComponentFixture<HighlightToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
