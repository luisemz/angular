import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlighted]"
})
export class HighlightedDirective {
  @Input("appHighlighted") color: string;

  constructor(private element: ElementRef) {}

  @HostListener("mouseenter") mouseEnter = () => {
    this.highlighted(this.color ? this.color : "gray");
  };

  @HostListener("mouseleave") mouseLeave = () => {
    this.highlighted("transparent");
  };

  private highlighted = (color: string): void => {
    this.element.nativeElement.style.backgroundColor = color;
  };
}
