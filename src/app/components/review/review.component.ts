import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, OnInit, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { REVIEW_DATA } from '../../interface/data';

@Component({
  selector: 'app-review',
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements AfterViewInit, OnInit {
  @ViewChild('marqueeRow1') marqueeRow1!: ElementRef;
  @ViewChild('marqueeRow2') marqueeRow2!: ElementRef;

  testimonials: REVIEW_DATA = { header: '', tagline: '', reviewItems: [{ words: '', rating: 0, name: '', image: { src: '', alt: '' } }] }
  speed = 1;
  offset1 = 0;
  offset2 = 0;

  private dataService = inject(DataService);
  private renderer = inject(Renderer2);

  ngOnInit() {
    this.dataService.getReviewData().subscribe(data => {
      this.testimonials = data;
    });
  }


  ngAfterViewInit() {
    this.animate();
  }

  animate() {
    const width1 = this.marqueeRow1.nativeElement.scrollWidth / 2;
    const width2 = this.marqueeRow2.nativeElement.scrollWidth / 2;

    // Move row1 left
    this.offset1 -= this.speed;
    if (Math.abs(this.offset1) >= width1) this.offset1 = 0;

    // Move row2 right
    this.offset2 += this.speed;
    if (this.offset2 >= width2) this.offset2 = 0;

    // Apply transform
    this.renderer.setStyle(
      this.marqueeRow1.nativeElement,
      'transform',
      `translateX(${this.offset1}px)`
    );
    this.renderer.setStyle(
      this.marqueeRow2.nativeElement,
      'transform',
      `translateX(${-width2 + this.offset2}px)` // <-- key fix
    );

    requestAnimationFrame(this.animate.bind(this));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getLoopedItems(items: any[], minLength = 10) {
    const result = [];
    let i = 0;
    while (result.length < minLength) {
      result.push(items[i % items.length]);
      i++;
    }
    return result;
  }


}
