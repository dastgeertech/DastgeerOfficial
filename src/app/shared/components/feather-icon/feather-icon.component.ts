import { Component, Input } from '@angular/core';
import { FeatherModule } from 'angular-feather';

@Component({
  selector: 'dastgeertech-feather-icon',
  standalone: true,
  imports: [FeatherModule],
  templateUrl: './feather-icon.component.html',
  styleUrl: './feather-icon.component.scss',
})
export class FeatherIconComponent {
  @Input() public icon?: string;
  @Input() public class?: string;
  constructor() {
    // constructor
  }
}
