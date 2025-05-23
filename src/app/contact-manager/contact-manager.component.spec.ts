import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerComponent } from './contact-manager.component';

describe('ContactManagerComponent', () => {
  let component: ContactManagerComponent;
  let fixture: ComponentFixture<ContactManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
