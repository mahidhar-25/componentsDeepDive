import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  buttonData = input.required<{ text: string; icon: string }>();

  text = () => this.buttonData().text;
  icon = () => this.buttonData().icon;
}
