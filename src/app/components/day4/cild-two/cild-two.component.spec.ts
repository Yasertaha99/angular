import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CildTwoComponent } from './cild-two.component';

describe('CildTwoComponent', () => {
  let component: CildTwoComponent;
  let fixture: ComponentFixture<CildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CildTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
