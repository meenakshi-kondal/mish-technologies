import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule, NgFor } from '@angular/common';
import { REVIEW_DATA } from '../../interface/data';

@Component({
  selector: 'app-review',
  imports: [NgFor, CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements OnDestroy {
  carouselItems: REVIEW_DATA = { header: '', reviewItems: [{ words: '', rating: 0, name: '', image: { src: '', alt: '' } }] }
  currentIndex = 0;
  private intervalId: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getReviewData().subscribe(data => {
      this.carouselItems = data;
      this.startAutoSlide();
    });
  }

  get visibleItems() {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (this.currentIndex + i) % this.carouselItems.reviewItems.length;
      items.push(this.carouselItems.reviewItems[index]);
    }
    return items;
  }

  moveLeft(): void {
    this.currentIndex = this.currentIndex > 0
      ? this.currentIndex - 1
      : this.carouselItems.reviewItems.length - 1;
  }

  moveRight(): void {
    this.currentIndex = this.currentIndex < this.carouselItems.reviewItems.length - 1
      ? this.currentIndex + 1
      : 0;
  }

  isActive(index: number): boolean {
    return index === 1;
  }

  getStarsArray(rating: number): number[] {
    return Array.from({ length: rating }, (_, i) => i + 1);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.moveRight();
    }, 3000); // 2 seconds
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
}
