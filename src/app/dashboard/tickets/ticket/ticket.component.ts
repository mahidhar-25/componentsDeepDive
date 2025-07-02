import { Component, input } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // This component can be used to display individual ticket details
  // It can be extended to include more functionality like editing or deleting tickets
  // Currently, it serves as a placeholder for ticket details
  ticketData = input.required<Ticket>();
}
