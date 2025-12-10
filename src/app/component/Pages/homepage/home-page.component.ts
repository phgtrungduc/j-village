import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../../../common/base.component';
import { HttpClient } from '@angular/common/http';
import { LoginApiService } from '../../../core/api-services/login-api.service';
import { LoggerService } from '../../../common/service/logger.service';
import { Router } from '@angular/router';
import { Footer } from '../../Common/footer/footer.component';
import { Header } from '../../Common/header/header.component';
import { RoomCardComponent } from '../../Share/room-card/room-card.component';
import { MemberSectionComponent } from '../../Share/member-section/member-section.component';
import { WhyChooseUsComponent } from '../../Share/why-choose-us/why-choose-us.component';
import { Room } from '../../../model/room.model';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [Footer, Header, RoomCardComponent, MemberSectionComponent, WhyChooseUsComponent, CommonModule, NgxPaginationModule, RouterModule
  ]
})
export class HomePage extends BaseComponent {

  // Room classes data
  roomClasses = [
    {
      id: 'all',
      name: 'Tất cả các phòng',
      rooms: []
    },
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      description: 'Phòng Deluxe sang trọng',
      rooms: [
        { name: 'Deluxe P 301', imageUrl: 'assets/images/room-class/DeluxeRoom/P301/R4_00807.jpg' },
        { name: 'Deluxe P 401', imageUrl: 'assets/images/room-class/DeluxeRoom/P401/R4_00544.jpg' },
        { name: 'Deluxe P 501', imageUrl: 'assets/images/room-class/DeluxeRoom/P501/R4_00378.jpg' },
        { name: 'Deluxe P 401 View', imageUrl: 'assets/images/room-class/DeluxeRoom/P401/R4_00564.jpg' },
        { name: 'Deluxe P 501 Suite', imageUrl: 'assets/images/room-class/DeluxeRoom/P501/R4_00391.jpg' },
        { name: 'Deluxe P 601', imageUrl: 'assets/images/room-class/DeluxeRoom/P601/R4_00193.jpg' }
      ]
    },
    // {
    //   id: 'executive',
    //   name: 'Executive Suite',
    //   description: 'Hạng phòng cao cấp với tiện nghi sang trọng',
    //   rooms: [
    //     { name: 'Executive Skyline', imageUrl: 'assets/images/room-class/ExecutiveSuite/Skyline/R4_00014.jpg' },
    //     { name: 'Executive Luxe', imageUrl: 'assets/images/room-class/ExecutiveSuite/Luxe/R4_00080.jpg' },
    //     { name: 'Executive Royal', imageUrl: 'assets/images/room-class/ExecutiveSuite/Royal/R4_00106.jpg' }
    //   ]
    // },
    // {
    //   id: 'boutique',
    //   name: 'Boutique Loft',
    //   description: 'Không gian loft cá tính và nghệ thuật',
    //   rooms: [
    //     { name: 'Velvet Loft', imageUrl: 'assets/images/room-class/BoutiqueLoft/Velvet/R4_00214.jpg' },
    //     { name: 'Floral Loft', imageUrl: 'assets/images/room-class/BoutiqueLoft/Floral/R4_00311.jpg' },
    //     { name: 'Neon Loft', imageUrl: 'assets/images/room-class/BoutiqueLoft/Neon/R4_00252.jpg' }
    //   ]
    // },
    {
      id: 'superior',
      name: 'Superior Room',
      description: 'Phòng Superior tiện nghi',
      rooms: [
        { name: 'Superior P 202', imageUrl: 'assets/images/room-class/SuperiorRoom/P202/R4_00443.jpg' },
        { name: 'Superior P 302', imageUrl: 'assets/images/room-class/SuperiorRoom/P302/R4_00708.jpg' },
        { name: 'Superior P 402', imageUrl: 'assets/images/room-class/SuperiorRoom/P402/R4_00598.jpg' },
        { name: 'Superior P 203', imageUrl: 'assets/images/room-class/SuperiorRoom/P203/R4_00132.jpg' },
        { name: 'Superior P 303', imageUrl: 'assets/images/room-class/SuperiorRoom/P303/R4_00757.jpg' }
      ]
    }
  ];

  activeRoomClass = 'all';

  roomList: Room[] = [
    {
      Id: 'ART001',
      Name: 'Cẩm nang du lịch Hà Nội',
      Description: 'Vietnam Airlines gợi ý lịch trình, điểm tham quan và kinh nghiệm ăn ở để bạn khám phá Hà Nội trọn vẹn từng mùa.',
      ImageUrl: 'assets/images/common-space/NMH00704.jpg',
      ShortAddess: 'Vietnam Airlines',
      ExternalUrl: 'https://www.vietnamairlines.com/vn/vi/useful-information/travel-guide/du-lich-ha-noi'
    },
    {
      Id: 'ART002',
      Name: 'Phố cà phê Triệu Việt Vương',
      Description: 'Hanoiera Hotel kể câu chuyện về con phố cà phê lâu đời, nơi phản chiếu nhịp sống chậm rãi của người Tràng An.',
      ImageUrl: 'assets/images/common-space/NMH00726.jpg',
      ShortAddess: 'Hanoiera Hotel',
      ExternalUrl: 'https://hanoierahotel.com/pho-ca-phe-trieu-viet-vuong/'
    },
    {
      Id: 'ART003',
      Name: '10 điểm du lịch văn hóa hàng đầu Việt Nam',
      Description: 'Tràng An Travel tuyển chọn những địa điểm đậm bản sắc từ Bắc vào Nam cho hành trình khám phá văn hóa.',
      ImageUrl: 'assets/images/common-space/NMH00912.jpg',
      ShortAddess: 'Tràng An Travel',
      ExternalUrl: 'https://www.trangantravel.com.vn/kham-pha-10-dia-diem-du-lich-van-hoa-hang-dau-o-viet-nam.html'
    },
    {
      Id: 'R001',
      Name: 'J Village Hotel Nguyễn Du',
      Description: 'Giữa lòng Quận 1 sôi động, M Village Hotel Nguyễn Du mang đến không gian tĩnh lặng và thanh bình hiếm có. Ánh sáng tự nhiên, cây xanh và thiết kế tối giản ấm cúng tạo không gian lý tưởng để làm việc, thư giãn với các tiện ích như khu coworking, bếp chung, phòng giặt và khu vườn nhỏ trên sân thượng.',
      ImageUrl: 'assets/images/room-card/1.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R002',
      Name: 'Express By J Village 46 Thảo Điền',
      Description: 'Điểm dừng chân hiện đại giữa lòng Thảo Điền nhộn nhịp. Express by M Village mang đến không gian lưu trú gọn gàng và tiện nghi cùng khu coworking, phòng gym, quầy bar, bếp chung và khu giặt sấy – lý tưởng cho những chuyến công tác hoặc nghỉ ngơi.',
      ImageUrl: 'assets/images/room-card/2.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R003',
      Name: 'J Village Premier Hotel Thi Sách',
      Description: 'Bước vào hành trình du hành Á Đông độc đáo giữa nhịp sống đậm bản sắc tại Phố Nhật, Quận 1. Đến và tận hưởng M Village Premier Hotel Thi Sách ngay hôm nay',
      ImageUrl: 'assets/images/room-card/3.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R001',
      Name: 'J Village Hotel Nguyễn Du',
      Description: 'Giữa lòng Quận 1 sôi động, M Village Hotel Nguyễn Du mang đến không gian tĩnh lặng và thanh bình hiếm có. Ánh sáng tự nhiên, cây xanh và thiết kế tối giản ấm cúng tạo không gian lý tưởng để làm việc, thư giãn với các tiện ích như khu coworking, bếp chung, phòng giặt và khu vườn nhỏ trên sân thượng.',
      ImageUrl: 'assets/images/room-card/1.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R002',
      Name: 'Express By J Village 46 Thảo Điền',
      Description: 'Điểm dừng chân hiện đại giữa lòng Thảo Điền nhộn nhịp. Express by M Village mang đến không gian lưu trú gọn gàng và tiện nghi cùng khu coworking, phòng gym, quầy bar, bếp chung và khu giặt sấy – lý tưởng cho những chuyến công tác hoặc nghỉ ngơi.',
      ImageUrl: 'assets/images/room-card/2.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R003',
      Name: 'J Village Premier Hotel Thi Sách',
      Description: 'Bước vào hành trình du hành Á Đông độc đáo giữa nhịp sống đậm bản sắc tại Phố Nhật, Quận 1. Đến và tận hưởng M Village Premier Hotel Thi Sách ngay hôm nay',
      ImageUrl: 'assets/images/room-card/3.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R001',
      Name: 'J Village Hotel Nguyễn Du',
      Description: 'Giữa lòng Quận 1 sôi động, M Village Hotel Nguyễn Du mang đến không gian tĩnh lặng và thanh bình hiếm có. Ánh sáng tự nhiên, cây xanh và thiết kế tối giản ấm cúng tạo không gian lý tưởng để làm việc, thư giãn với các tiện ích như khu coworking, bếp chung, phòng giặt và khu vườn nhỏ trên sân thượng.',
      ImageUrl: 'assets/images/room-card/1.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R002',
      Name: 'Express By J Village 46 Thảo Điền',
      Description: 'Điểm dừng chân hiện đại giữa lòng Thảo Điền nhộn nhịp. Express by M Village mang đến không gian lưu trú gọn gàng và tiện nghi cùng khu coworking, phòng gym, quầy bar, bếp chung và khu giặt sấy – lý tưởng cho những chuyến công tác hoặc nghỉ ngơi.',
      ImageUrl: 'assets/images/room-card/2.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R003',
      Name: 'J Village Premier Hotel Thi Sách',
      Description: 'Bước vào hành trình du hành Á Đông độc đáo giữa nhịp sống đậm bản sắc tại Phố Nhật, Quận 1. Đến và tận hưởng M Village Premier Hotel Thi Sách ngay hôm nay',
      ImageUrl: 'assets/images/room-card/3.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
  ];

  //paging 
  page = 1;

  // Stories section data
  storiesList = [
    {
      id: 1,
      imageUrl: 'assets/images/stories/1.jpg',
      title: 'Deluxe Room P301',
      description: 'Phòng Deluxe sang trọng với thiết kế hiện đại'
    },
    {
      id: 2,
      imageUrl: 'assets/images/room-class/DeluxeRoom/P301/R4_00834.jpg',
      title: 'Deluxe Room View',
      description: 'Không gian rộng rãi và thoải mái'
    },
    {
      id: 3,
      imageUrl: 'assets/images/stories/2.jpg',
      title: 'E Class - Black Pink',
      description: 'Phong cách hiện đại và cá tính'
    },
    {
      id: 4,
      imageUrl: 'assets/images/stories/3.jpg',
      title: 'E Class - Pink Flower',
      description: 'Thiết kế lãng mạn và tinh tế'
    },
    {
      id: 5,
      imageUrl: 'assets/images/room-class/SuperiorRoom/P202/R4_00443.jpg',
      title: 'S Class Premium',
      description: 'Đẳng cấp và sang trọng bậc nhất'
    },
    {
      id: 6,
      imageUrl: 'assets/images/stories/4.jpg',
      title: 'Superior Room',
      description: 'Tiện nghi đầy đủ cho nghỉ dưỡng'
    }
  ];

  constructor(private httpClient: HttpClient,
    private loginService : LoginApiService,
    private logService : LoggerService,
    private router: Router
  ){
    super();
  }

  changeRoomClass(classId: string): void {
    this.activeRoomClass = classId;
    this.page = 1; // Reset to first page when changing filter
  }

  get filteredRooms() {
    if (this.activeRoomClass === 'all') {
      // Return all rooms from all classes
      return this.roomClasses.slice(1).flatMap(rc => rc.rooms);
    }
    const roomClass = this.roomClasses.find(rc => rc.id === this.activeRoomClass);
    return roomClass ? roomClass.rooms : [];
  }
}