import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[fosterRequest]'
})
export class FavoriteDirective {
  @HostBinding('class.is-fosterRequest') isFavorite = true;

  @HostBinding('class.is-fosterRequest-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  
  @Input() set fosterRequest(value) {
    this.isFavorite = value;
  }
}
