import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Services
import { LoggerService } from '../../../common/service/logger.service';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  
  // Input Properties
  @Input() text: string = 'Button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() type: ButtonType = 'button';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fullWidth: boolean = false;
  @Input() rounded: boolean = false;
  @Input() outlined: boolean = false;
  @Input() flat: boolean = false;
  @Input() customClass: string = '';

  // Output Events
  @Output() clicked = new EventEmitter<void>();
  @Output() mouseEnter = new EventEmitter<void>();
  @Output() mouseLeave = new EventEmitter<void>();

  constructor(private logger: LoggerService) {}

  // Methods
  public onClick(): void {
    if (!this.disabled && !this.loading) {
      this.logger.info(`Button clicked: ${this.text}`);
      this.clicked.emit();
    }
  }

  public onMouseEnter(): void {
    this.mouseEnter.emit();
  }

  public onMouseLeave(): void {
    this.mouseLeave.emit();
  }

  // Computed properties
  public get buttonClasses(): string {
    const classes = [
      'custom-button',
      `custom-button--${this.variant}`,
      `custom-button--${this.size}`,
      this.fullWidth ? 'custom-button--full-width' : '',
      this.rounded ? 'custom-button--rounded' : '',
      this.outlined ? 'custom-button--outlined' : '',
      this.flat ? 'custom-button--flat' : '',
      this.disabled ? 'custom-button--disabled' : '',
      this.loading ? 'custom-button--loading' : '',
      this.customClass
    ].filter(Boolean);

    return classes.join(' ');
  }

  public get iconClasses(): string {
    const classes = [
      'custom-button__icon',
      this.iconPosition === 'right' ? 'custom-button__icon--right' : 'custom-button__icon--left'
    ];
    return classes.join(' ');
  }
}