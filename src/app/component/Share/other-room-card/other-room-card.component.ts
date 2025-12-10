import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'other-room-card',
  templateUrl: './other-room-card.component.html',
  styleUrl: './other-room-card.component.scss',
  imports: [CommonModule],
  standalone: true
})
export class OtherRoomCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() roomId: string = '';
  @Output() onBookRoom = new EventEmitter<void>();
  @Output() onClick = new EventEmitter<string>();

  handleBookRoom(): void {
    this.onBookRoom.emit();
  }

  handleCardClick(): void {
    this.onClick.emit(this.roomId);
  }
} 