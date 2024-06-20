import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterCompComponent } from './writer-comp.component';

describe('WriterCompComponent', () => {
  let component: WriterCompComponent;
  let fixture: ComponentFixture<WriterCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriterCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
