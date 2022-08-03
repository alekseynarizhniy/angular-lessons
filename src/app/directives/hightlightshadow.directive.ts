import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlightShadowDirective]',
})
export class HightlightShadowDirective {
  shadow: string =
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';

  @HostBinding('style.boxShadow') boxShadow!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.boxShadow = this.shadow;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.boxShadow = '';
  }
}
