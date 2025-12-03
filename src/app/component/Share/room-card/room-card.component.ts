import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BaseComponent } from '../../../common/base.component';
import { Room } from '../../../model/room.model';

@Component({
  selector: 'room-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.scss'
})
export class RoomCardComponent extends BaseComponent{
  @Input() currentRoom : Room = {} as Room;
  
  constructor(
    private router: Router
  ){
    super();
  }

  navigateToDetail(event: Event): void {
    event.stopPropagation();
    if (this.currentRoom?.Id) {
      this.router.navigate(['/hotel', this.currentRoom.Id]);
    }
  }
}
