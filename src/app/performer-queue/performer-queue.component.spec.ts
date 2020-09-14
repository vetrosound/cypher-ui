import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformerQueueComponent } from './performer-queue.component';

describe('PerformerQueueComponent', () => {
  let component: PerformerQueueComponent;
  let fixture: ComponentFixture<PerformerQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformerQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
