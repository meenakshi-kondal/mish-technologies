import { AfterViewInit, Directive, inject, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLazyLoadObserver]',
  standalone: true,
})
export class LazyLoadObserverDirective implements AfterViewInit {

  @Input('appLazyLoadObserver') component!: any;

  private viewContainerRef = inject(ViewContainerRef);
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
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
