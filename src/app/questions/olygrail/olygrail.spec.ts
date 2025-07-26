import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olygrail } from './olygrail';

describe('Olygrail', () => {
  let component: Olygrail;
  let fixture: ComponentFixture<Olygrail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Olygrail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Olygrail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
