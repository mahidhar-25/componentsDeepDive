import {
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // Using ViewChild to access the form element
  // This allows us to reset the form after submission
  @ViewChild('form') formComponent?: ElementRef<HTMLFormElement>;

  add = output<{
    title: string;
    request: string;
  }>();
  // signal view child
  //private formComponentDuplicate = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit(title: string, request: string, form: HTMLFormElement): void {
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Request:', request);

    //form.reset(); // Reset the form after submission
    console.log('Form submitted');
    if (this.formComponent) {
      this.formComponent?.nativeElement.reset();
    }
    this.add.emit({
      title,
      request,
    });
  }
}
