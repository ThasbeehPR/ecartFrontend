import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadeerComponent } from './headeer.component';

describe('HeadeerComponent', () => {
  let component: HeadeerComponent;
  let fixture: ComponentFixture<HeadeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadeerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
