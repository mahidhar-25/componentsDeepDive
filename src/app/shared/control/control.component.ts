import {
  Component,
  ContentChild,
  ElementRef,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent {
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
  label = input.required<string>();

  //Messes somewhere onClick not called from anywhere
  onClick(): void {
    if (this.control) {
      this.control.nativeElement.focus();
    }
  }
}
