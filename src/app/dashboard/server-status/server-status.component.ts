import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = 'online';

  constructor() {
    // Simulate a status change after 3 seconds
  }

  private interval?: ReturnType<typeof setInterval>;
  ngOnInit() {
    this.interval = setInterval(() => {
      const statuses = ['online', 'offline', 'unknown'];
      this.currentStatus =
        statuses[Math.floor(Math.random() * statuses.length)];
    }, 2000);
  }

  ngOnDestroy() {
    // Cleanup logic if needed
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
