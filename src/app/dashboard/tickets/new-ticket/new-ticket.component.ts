import { Component } from '@angular/core';
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
  onSubmit(title: string, request: string): void {
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Request:', request);
    console.log('Form submitted');
  }
}
