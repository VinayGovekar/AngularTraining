import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderCompComponent } from './reader-comp.component';

describe('ReaderCompComponent', () => {
  let component: ReaderCompComponent;
  let fixture: ComponentFixture<ReaderCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaderCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
