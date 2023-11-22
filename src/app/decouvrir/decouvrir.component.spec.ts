import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouvrirComponent } from './decouvrir.component';

describe('DecouvrirComponent', () => {
  let component: DecouvrirComponent;
  let fixture: ComponentFixture<DecouvrirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecouvrirComponent]
    });
    fixture = TestBed.createComponent(DecouvrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
