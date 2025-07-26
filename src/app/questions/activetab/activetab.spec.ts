import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activetab } from './activetab';

describe('Activetab', () => {
  let component: Activetab;
  let fixture: ComponentFixture<Activetab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activetab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Activetab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
