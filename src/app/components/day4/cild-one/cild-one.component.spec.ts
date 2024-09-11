import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CildOneComponent } from './cild-one.component';

describe('CildOneComponent', () => {
  let component: CildOneComponent;
  let fixture: ComponentFixture<CildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CildOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
