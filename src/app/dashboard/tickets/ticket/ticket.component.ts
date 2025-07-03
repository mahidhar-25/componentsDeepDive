import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  showDetails = signal(false);
  closeTicket = output<{ ticketId: string }>();
  toggleDetails() {
    this.showDetails.update((current) => !current);
  }
  // This component can be used to display individual ticket details
  // It can be extended to include more functionality like editing or deleting tickets
  // Currently, it serves as a placeholder for ticket details
  ticketData = input.required<Ticket>();

  onMarkAsClosed() {
    this.closeTicket.emit({ ticketId: this.ticketData().id });
  }
}
