import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AmenityItemComponent } from '../../Share/amenity-item/amenity-item.component';
import { OtherRoomCardComponent } from '../../Share/other-room-card/other-room-card.component';
import { BookingHelpers } from '../../../helper/bookingHelper';
import { Room } from '../../../model/room.model';
import { AppStates, getRoomById, getOtherRooms } from '../../../store/app-state';

@Component({
  selector: 'room-detail',
  imports: [CommonModule, RouterModule, AmenityItemComponent, OtherRoomCardComponent],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.scss'
})
export class RoomDetailComponent implements OnInit {
  roomId: string | null = null;
  currentRoom$!: Observable<Room | undefined>;
  otherRooms$!: Observable<Room[]>;
  currentRoom: Room | null = null;
  roomImages: string[] = [];
  
  // Image gallery modal states
  isGalleryOpen: boolean = false;
  currentImageIndex: number = 0;

  // Pagination for other rooms
  displayedRoomsCount: number = 3;
  roomsPerPage: number = 3;
  allOtherRooms: Room[] = [];
  displayedOtherRooms: Room[] = [];
  hasMoreRooms: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppStates>
  ) {}
  
  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id');
    console.log('Room ID:', this.roomId);
    this.loadRoomData();
  }

  loadRoomData(): void {
    if (this.roomId) {
      // Reset pagination when loading new room
      this.displayedRoomsCount = this.roomsPerPage;
      
      // Get current room from store
      this.currentRoom$ = this.store.select(getRoomById(this.roomId));
      
      // Subscribe to current room to set images
      this.currentRoom$.subscribe(room => {
        this.currentRoom = room || null;
        if (room && room.Images && room.RoomClass && room.SubFolder) {
          this.roomImages = room.Images.map(img => 
            `assets/images/room-class/${room.RoomClass}/${room.SubFolder}/${img}`
          );
        }
      });

      // Get ALL other rooms (excluding current room)
      this.store.select(getOtherRooms(this.roomId, 999)).subscribe(rooms => {
        this.allOtherRooms = rooms;
        this.updateDisplayedRooms();
      });
    }
  }

  updateDisplayedRooms(): void {
    this.displayedOtherRooms = this.allOtherRooms.slice(0, this.displayedRoomsCount);
    this.hasMoreRooms = this.displayedRoomsCount < this.allOtherRooms.length;
  }

  loadMoreRooms(): void {
    this.displayedRoomsCount += this.roomsPerPage;
    this.updateDisplayedRooms();
  }

  onBookRoom(): void {
    BookingHelpers.openFacebookBooking();
  }

  onOtherRoomBook(): void {
    BookingHelpers.openFacebookBooking();
  }

  onOtherRoomClick(roomId: string): void {
    this.router.navigate(['/room', roomId]);
    // Reload the component data
    this.roomId = roomId;
    this.loadRoomData();
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Image gallery functions
  openGallery(index: number): void {
    this.currentImageIndex = index;
    this.isGalleryOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeGallery(): void {
    this.isGalleryOpen = false;
    document.body.style.overflow = 'auto';
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.roomImages.length;
  }

  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.roomImages.length) % this.roomImages.length;
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.isGalleryOpen) return;

    switch(event.key) {
      case 'Escape':
        this.closeGallery();
        break;
      case 'ArrowLeft':
        this.previousImage();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
    }
  }
}
