import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherIconComponent } from 'src/app/shared/components/feather-icon/feather-icon.component';

@Component({
  selector: 'dastgeertech-header',
  standalone: true,
  imports: [FeatherIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
