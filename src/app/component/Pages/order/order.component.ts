import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../common/base.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input'; // nếu bạn dùng <input matInput>
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RoomOrderCardComponent } from '../../Share/room-order-card/room-order-card.component';
import { Room } from '../../../model/room.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStates, getAllRooms } from '../../../store/app-state';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule , FormsModule, MatSliderModule, MatIconModule , RoomOrderCardComponent, NgxPaginationModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent extends BaseComponent implements OnInit {
  rooms$!: Observable<Room[]>;
  rooms: Room[] = [];


    //sldier
  price = 5400000;
  selectedCategory = '';
  checkOut = null;
  checkIn = null;
  category =  '';
  min = 400000;
  max = 5400000;
  value = 500000; 


  //paging 
  page = 1;

  constructor() {
    super();
  }

  ngOnInit(): void {
    // Get rooms from store (inherited from BaseComponent)
    this.rooms$ = this.store.select(getAllRooms);
    
    // Subscribe to rooms to get the array for local use if needed
    this.rooms$.subscribe(rooms => {
      this.rooms = rooms;
    });
  }
}