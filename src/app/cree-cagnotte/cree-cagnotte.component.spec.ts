import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeCagnotteComponent } from './cree-cagnotte.component';

describe('CreeCagnotteComponent', () => {
  let component: CreeCagnotteComponent;
  let fixture: ComponentFixture<CreeCagnotteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreeCagnotteComponent]
    });
    fixture = TestBed.createComponent(CreeCagnotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
