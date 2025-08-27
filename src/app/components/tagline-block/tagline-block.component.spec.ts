import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglineBlockComponent } from './tagline-block.component';

describe('TaglineBlockComponent', () => {
  let component: TaglineBlockComponent;
  let fixture: ComponentFixture<TaglineBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaglineBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaglineBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
