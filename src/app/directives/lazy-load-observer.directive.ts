import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, inject, Input, PLATFORM_ID, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLazyLoadObserver]',
  standalone: true,
})
export class LazyLoadObserverDirective implements AfterViewInit {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input('appLazyLoadObserver') component!: any;

  private viewContainerRef = inject(ViewContainerRef);
  private observer!: IntersectionObserver;
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {

     if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const el = this.viewContainerRef.element.nativeElement;

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.viewContainerRef.createComponent(this.component);
        this.observer.disconnect();
      }
    });

    this.observer.observe(el);
  }

}
