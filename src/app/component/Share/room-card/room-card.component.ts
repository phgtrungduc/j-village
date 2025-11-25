import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../../../common/base.component';
import { Room } from '../../../model/room.model';

@Component({
  selector: 'room-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.scss'
})
export class RoomCardComponent extends BaseComponent{
  @Input() currentRoom : Room = {} as Room;
  constructor(
  ){
    super();
  }

  openExternal(event: Event, url?: string){
    event.stopPropagation();
    if(!url){
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
