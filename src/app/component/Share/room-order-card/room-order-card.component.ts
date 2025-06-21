import { Component, Input } from '@angular/core';
import { Room } from '../../../model/room.model';

@Component({
  selector: 'room-order-card',
  imports: [],
  templateUrl: './room-order-card.component.html',
  styleUrl: './room-order-card.component.scss',
})
export class RoomOrderCardComponent {
  @Input() currentRoom: Room = {} as Room;
}
