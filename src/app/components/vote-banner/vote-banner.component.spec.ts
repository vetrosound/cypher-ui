import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteBannerComponent } from './vote-banner.component';

describe('VoteBannerComponent', () => {
  let component: VoteBannerComponent;
  let fixture: ComponentFixture<VoteBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
