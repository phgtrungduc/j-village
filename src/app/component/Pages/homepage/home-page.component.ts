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
import { Room } from '../../../model/room.model';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [Footer, Header, RoomCardComponent, MemberSectionComponent, CommonModule, NgxPaginationModule
  ]
})
export class HomePage extends BaseComponent {

  roomList: Room[] = [
    {
      Id: 'R001',
      Name: 'J Village Hotel Nguyễn Du',
      Description: 'Giữa lòng Quận 1 sôi động, M Village Hotel Nguyễn Du mang đến không gian tĩnh lặng và thanh bình hiếm có. Ánh sáng tự nhiên, cây xanh và thiết kế tối giản ấm cúng tạo không gian lý tưởng để làm việc, thư giãn với các tiện ích như khu coworking, bếp chung, phòng giặt và khu vườn nhỏ trên sân thượng.',
      ImageUrl: 'images/room-card/1.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R002',
      Name: 'Express By J Village 46 Thảo Điền',
      Description: 'Điểm dừng chân hiện đại giữa lòng Thảo Điền nhộn nhịp. Express by M Village mang đến không gian lưu trú gọn gàng và tiện nghi cùng khu coworking, phòng gym, quầy bar, bếp chung và khu giặt sấy – lý tưởng cho những chuyến công tác hoặc nghỉ ngơi.',
      ImageUrl: 'images/room-card/2.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R003',
      Name: 'J Village Premier Hotel Thi Sách',
      Description: 'Bước vào hành trình du hành Á Đông độc đáo giữa nhịp sống đậm bản sắc tại Phố Nhật, Quận 1. Đến và tận hưởng M Village Premier Hotel Thi Sách ngay hôm nay',
      ImageUrl: 'images/room-card/3.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R001',
      Name: 'J Village Hotel Nguyễn Du',
      Description: 'Giữa lòng Quận 1 sôi động, M Village Hotel Nguyễn Du mang đến không gian tĩnh lặng và thanh bình hiếm có. Ánh sáng tự nhiên, cây xanh và thiết kế tối giản ấm cúng tạo không gian lý tưởng để làm việc, thư giãn với các tiện ích như khu coworking, bếp chung, phòng giặt và khu vườn nhỏ trên sân thượng.',
      ImageUrl: 'images/room-card/1.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R002',
      Name: 'Express By J Village 46 Thảo Điền',
      Description: 'Điểm dừng chân hiện đại giữa lòng Thảo Điền nhộn nhịp. Express by M Village mang đến không gian lưu trú gọn gàng và tiện nghi cùng khu coworking, phòng gym, quầy bar, bếp chung và khu giặt sấy – lý tưởng cho những chuyến công tác hoặc nghỉ ngơi.',
      ImageUrl: 'images/room-card/2.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R003',
      Name: 'J Village Premier Hotel Thi Sách',
      Description: 'Bước vào hành trình du hành Á Đông độc đáo giữa nhịp sống đậm bản sắc tại Phố Nhật, Quận 1. Đến và tận hưởng M Village Premier Hotel Thi Sách ngay hôm nay',
      ImageUrl: 'images/room-card/3.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R001',
      Name: 'J Village Hotel Nguyễn Du',
      Description: 'Giữa lòng Quận 1 sôi động, M Village Hotel Nguyễn Du mang đến không gian tĩnh lặng và thanh bình hiếm có. Ánh sáng tự nhiên, cây xanh và thiết kế tối giản ấm cúng tạo không gian lý tưởng để làm việc, thư giãn với các tiện ích như khu coworking, bếp chung, phòng giặt và khu vườn nhỏ trên sân thượng.',
      ImageUrl: 'images/room-card/1.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R002',
      Name: 'Express By J Village 46 Thảo Điền',
      Description: 'Điểm dừng chân hiện đại giữa lòng Thảo Điền nhộn nhịp. Express by M Village mang đến không gian lưu trú gọn gàng và tiện nghi cùng khu coworking, phòng gym, quầy bar, bếp chung và khu giặt sấy – lý tưởng cho những chuyến công tác hoặc nghỉ ngơi.',
      ImageUrl: 'images/room-card/2.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R003',
      Name: 'J Village Premier Hotel Thi Sách',
      Description: 'Bước vào hành trình du hành Á Đông độc đáo giữa nhịp sống đậm bản sắc tại Phố Nhật, Quận 1. Đến và tận hưởng M Village Premier Hotel Thi Sách ngay hôm nay',
      ImageUrl: 'images/room-card/3.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R001',
      Name: 'J Village Hotel Nguyễn Du',
      Description: 'Giữa lòng Quận 1 sôi động, M Village Hotel Nguyễn Du mang đến không gian tĩnh lặng và thanh bình hiếm có. Ánh sáng tự nhiên, cây xanh và thiết kế tối giản ấm cúng tạo không gian lý tưởng để làm việc, thư giãn với các tiện ích như khu coworking, bếp chung, phòng giặt và khu vườn nhỏ trên sân thượng.',
      ImageUrl: 'images/room-card/1.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R002',
      Name: 'Express By J Village 46 Thảo Điền',
      Description: 'Điểm dừng chân hiện đại giữa lòng Thảo Điền nhộn nhịp. Express by M Village mang đến không gian lưu trú gọn gàng và tiện nghi cùng khu coworking, phòng gym, quầy bar, bếp chung và khu giặt sấy – lý tưởng cho những chuyến công tác hoặc nghỉ ngơi.',
      ImageUrl: 'images/room-card/2.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
    {
      Id: 'R003',
      Name: 'J Village Premier Hotel Thi Sách',
      Description: 'Bước vào hành trình du hành Á Đông độc đáo giữa nhịp sống đậm bản sắc tại Phố Nhật, Quận 1. Đến và tận hưởng M Village Premier Hotel Thi Sách ngay hôm nay',
      ImageUrl: 'images/room-card/3.jpg',
      ShortAddess: 'Hồ Chí Minh'
    },
  ];

  //paging 
  page = 1;

  constructor(private httpClient: HttpClient,
    private loginService : LoginApiService,
    private logService : LoggerService,
    private router: Router
  ){
    super();
  }
}