import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'room-detail',
  imports: [CommonModule],
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
