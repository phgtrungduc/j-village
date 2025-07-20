import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AmenityItemComponent } from '../../Share/amenity-item/amenity-item.component';
import { OtherRoomCardComponent } from '../../Share/other-room-card/other-room-card.component';

@Component({
  selector: 'room-detail',
  imports: [CommonModule, AmenityItemComponent, OtherRoomCardComponent],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.scss'
})
export class RoomDetailComponent {
  roomId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.roomId = this.route.snapshot.paramMap.get('id');
    console.log('Room ID:', this.roomId);
  }
  ngOnInit(): void {

  }
}
