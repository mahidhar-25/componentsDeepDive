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

  enteredTitle = '';
  enteredRequest = '';
  onSubmit(): void {
    // Handle form submission logic here
    console.log('Title:', this.enteredTitle);
    console.log('Request:', this.enteredRequest);

    this.add.emit({
      title: this.enteredTitle,
      request: this.enteredRequest,
    });
    //form.reset(); // Reset the form after submission
    this.enteredTitle = '';
    this.enteredRequest = '';
  }
}
