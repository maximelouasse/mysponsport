import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionPageComponent } from './proposition-page.component';

describe('PropositionPageComponent', () => {
  let component: PropositionPageComponent;
  let fixture: ComponentFixture<PropositionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
