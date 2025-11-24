import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AmenityItemComponent } from '../../Share/amenity-item/amenity-item.component';
import { OtherRoomCardComponent } from '../../Share/other-room-card/other-room-card.component';
import { BookingHelpers } from '../../../helper/bookingHelper';
import { Room } from '../../../model/room.model';

@Component({
  selector: 'room-detail',
  imports: [CommonModule, AmenityItemComponent, OtherRoomCardComponent],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.scss'
})
export class RoomDetailComponent {
  roomId: string | null = null;
  currentRoom: Room | null = null;
  roomImages: string[] = [];

  // Dữ liệu phòng tương tự như trong order.component.ts
  rooms: Room[] = [
    {
      Id: 'P202',
      Name: 'Superior Room P202',
      Description: 'Phòng Superior hiện đại với thiết kế tinh tế, đầy đủ tiện nghi cao cấp. Không gian thoáng đãng với ánh sáng tự nhiên, tạo cảm giác thư thái và thoải mái cho khách lưu trú.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P202/R4_00443.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P202',
      Images: ['R4_00443.jpg', 'R4_00456.jpg', 'R4_00472.jpg']
    } as Room,
    {
      Id: 'P203',
      Name: 'Superior Room P203',
      Description: 'Không gian Superior góc vườn với gam màu ấm áp, thích hợp cho khách yêu sự riêng tư và tĩnh lặng.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P203/R4_00132.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1900000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P203',
      Images: ['R4_00132.jpg', 'R4_00153.jpg', 'R4_00163.jpg']
    } as Room,
    {
      Id: 'P302',
      Name: 'Superior Room P302',
      Description: 'Phòng Superior với view nội khu thoáng và thiết kế hiện đại, mang lại trải nghiệm lưu trú thoải mái và đẳng cấp.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P302/R4_00708.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1950000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P302',
      Images: ['R4_00708.jpg', 'R4_00726.jpg', 'R4_00736.jpg']
    } as Room,
    {
      Id: 'P303',
      Name: 'Superior Room P303',
      Description: 'Phòng Superior tông gỗ ấm với ban công nhỏ, thích hợp cho kỳ nghỉ thư giãn cuối tuần.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P303/R4_00757.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2000000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P303',
      Images: ['R4_00757.jpg', 'R4_00774.jpg', 'R4_00786.jpg']
    } as Room,
    {
      Id: 'P402',
      Name: 'Superior Room P402',
      Description: 'Phòng Superior cao cấp với không gian rộng rãi và ánh sáng tự nhiên dồi dào, thích hợp cho cả làm việc và nghỉ dưỡng.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P402/R4_00598.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2050000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P402',
      Images: ['R4_00598.jpg', 'R4_00623.jpg', 'R4_00640.jpg']
    } as Room,
    {
      Id: 'P403',
      Name: 'Superior Room P403',
      Description: 'Thiết kế Superior trẻ trung với nội thất tối giản, cửa sổ rộng view phố giúp đón nắng sáng mỗi ngày.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P403/R4_00661.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2100000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P403',
      Images: ['R4_00661.jpg', 'R4_00674.jpg', 'R4_00693.jpg']
    } as Room,
    {
      Id: 'P502',
      Name: 'Superior Room P502',
      Description: 'Phòng Superior tầng cao với góc làm việc rộng và ánh sáng dịu, phù hợp cho khách công tác dài ngày.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P502/R4_00451.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2150000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P502',
      Images: ['R4_00451.jpg', 'R4_00515.jpg', 'R4_00526.jpg']
    } as Room,
    {
      Id: 'P503',
      Name: 'Superior Room P503',
      Description: 'Không gian Superior với gam màu kem nhẹ, trang bị đầy đủ tiện nghi hiện đại cho chuyến đi thư thái.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P503/R4_00464.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2200000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P503',
      Images: ['R4_00464.jpg', 'R4_00486.jpg', 'R4_00497.jpg']
    } as Room,
    {
      Id: 'P602',
      Name: 'Superior Room P602',
      Description: 'Superior P602 mang sắc xanh nhạt mát mắt, kết hợp khu lounge nhỏ để đọc sách và thư giãn.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P602/R4_00259.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2250000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P602',
      Images: ['R4_00259.jpg', 'R4_00284.jpg', 'R4_00309.jpg']
    } as Room,
    {
      Id: 'P603',
      Name: 'Superior Room P603',
      Description: 'Phòng Superior phong cách Nhật bản tối giản với nội thất gỗ sáng tạo nên sự ấm cúng cho mọi khoảnh khắc.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P603/R4_00335.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2300000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P603',
      Images: ['R4_00335.jpg', 'R4_00347.jpg', 'R4_00359.jpg']
    } as Room,
    {
      Id: 'P702',
      Name: 'Superior Room P702',
      Description: 'Phòng Superior tầng cao view trung tâm, cửa kính toàn phần giúp ngắm cảnh đêm tuyệt đẹp.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P702/R4_00053.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2350000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P702',
      Images: ['R4_00053.jpg', 'R4_00070.jpg', 'R4_00094.jpg']
    } as Room,
    {
      Id: 'P703',
      Name: 'Superior Room P703',
      Description: 'Không gian Superior góc phố với phòng tắm rộng và ánh sáng tự nhiên, rất phù hợp cho cặp đôi.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P703/R4_00124.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2400000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P703',
      Images: ['R4_00124.jpg', 'R4_00147.jpg', 'R4_00160.jpg']
    } as Room,
    {
      Id: 'P802',
      Name: 'Superior Room P802',
      Description: 'Phòng Superior cao nhất tòa nhà với tông màu gỗ trầm, mang lại sự riêng tư tối đa và tầm nhìn toàn cảnh.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P802/R4_00903.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2450000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P802',
      Images: ['R4_00903.jpg', 'R4_00942.jpg', 'R4_00958.jpg']
    } as Room,
    {
      Id: 'P803',
      Name: 'Superior Room P803',
      Description: 'Phòng Superior signature với cửa sổ vòm và nội thất bo cong, mang hơi thở retro tinh tế.',
      ImageUrl: 'assets/images/room-class/SuperiorRoom/P803/R4_00857.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2500000,
      RoomClass: 'SuperiorRoom',
      SubFolder: 'P803',
      Images: ['R4_00857.jpg', 'R4_00869.jpg', 'R4_00885.jpg']
    } as Room,
    {
      Id: 'P301',
      Name: 'Deluxe Room P301',
      Description: 'Phòng Deluxe sang trọng với thiết kế đẳng cấp và view tuyệt đẹp. Không gian rộng rãi, phù hợp cho kỳ nghỉ dưỡng hoàn hảo.',
      ImageUrl: 'assets/images/room-class/DeluxeRoom/P301/R4_00807.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2350000,
      RoomClass: 'DeluxeRoom',
      SubFolder: 'P301',
      Images: ['R4_00807.jpg', 'R4_00834.jpg', 'R4_00848.jpg']
    } as Room,
    {
      Id: 'P401',
      Name: 'Deluxe Room P401',
      Description: 'Phòng Deluxe cao cấp với thiết kế sang trọng và tinh tế, được trang bị đầy đủ tiện nghi hiện đại.',
      ImageUrl: 'assets/images/room-class/DeluxeRoom/P401/R4_00544.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2450000,
      RoomClass: 'DeluxeRoom',
      SubFolder: 'P401',
      Images: ['R4_00544.jpg', 'R4_00564.jpg', 'R4_00579.jpg']
    } as Room,
    {
      Id: 'P501',
      Name: 'Deluxe Room P501',
      Description: 'Phòng Deluxe tầng cao với view panoramic tuyệt đẹp, mang lại trải nghiệm nghỉ dưỡng đẳng cấp.',
      ImageUrl: 'assets/images/room-class/DeluxeRoom/P501/R4_00378.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2550000,
      RoomClass: 'DeluxeRoom',
      SubFolder: 'P501',
      Images: ['R4_00378.jpg', 'R4_00391.jpg', 'R4_00400.jpg']
    } as Room,
    {
      Id: 'P601',
      Name: 'Deluxe Room P601',
      Description: 'Deluxe P601 sở hữu bồn tắm độc lập, khu lounge rộng và view sông lý tưởng cho kỳ nghỉ thư thái.',
      ImageUrl: 'assets/images/room-class/DeluxeRoom/P601/R4_00193.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2650000,
      RoomClass: 'DeluxeRoom',
      SubFolder: 'P601',
      Images: ['R4_00193.jpg', 'R4_00215.jpg', 'R4_00227.jpg']
    } as Room,
    {
      Id: 'P701',
      Name: 'Deluxe Room P701',
      Description: 'Phòng Deluxe cao nhất với cửa sổ kính tràn viền, kèm pantry riêng và khu đọc sách thoáng sáng.',
      ImageUrl: 'assets/images/room-class/DeluxeRoom/P701/R4_00005.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 2750000,
      RoomClass: 'DeluxeRoom',
      SubFolder: 'P701',
      Images: ['R4_00005.jpg', 'R4_00014.jpg', 'R4_00032.jpg']
    } as Room,
  ];

  constructor(private route: ActivatedRoute) {
    this.roomId = this.route.snapshot.paramMap.get('id');
    console.log('Room ID:', this.roomId);
  }
  
  ngOnInit(): void {
    this.loadRoomData();
  }

  loadRoomData(): void {
    if (this.roomId) {
      this.currentRoom = this.rooms.find(room => room.Id === this.roomId) || null;
      if (this.currentRoom && this.currentRoom.Images && this.currentRoom.RoomClass && this.currentRoom.SubFolder) {
        this.roomImages = this.currentRoom.Images.map(img => 
          `assets/images/room-class/${this.currentRoom!.RoomClass}/${this.currentRoom!.SubFolder}/${img}`
        );
      }
    }
  }

  onBookRoom(): void {
    BookingHelpers.openFacebookBooking();
  }

  onOtherRoomBook(): void {
    BookingHelpers.openFacebookBooking();
  }
}
