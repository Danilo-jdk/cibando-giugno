import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineComponent } from './combine.component';

describe('CombineComponent', () => {
  let component: CombineComponent;
  let fixture: ComponentFixture<CombineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombineComponent]
    });
    fixture = TestBed.createComponent(CombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
