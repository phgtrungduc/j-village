import { Component } from '@angular/core';
import { BaseComponent } from '../../../common/base.component';
import { CommonModule } from '@angular/common';
import { MemberSectionComponent } from '../../Share/member-section/member-section.component';
import { Router } from '@angular/router';

interface Amenity {
  id: string;
  title: string;
  description: string;
  image: string;
  locations: {
    name: string;
    address: string;
    image: string;
  }[];
}

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, MemberSectionComponent],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent extends BaseComponent {
  activeTab: string = 'all';
  
  amenities: {[key: string]: Amenity} = {
    DeluxeRoom: {
      id: 'DeluxeRoom',
      title: 'Deluxe Room',
      description: 'Phòng Deluxe sang trọng với thiết kế hiện đại, không gian rộng rãi và đầy đủ tiện nghi cao cấp. Lựa chọn hoàn hảo cho những ai đề cao sự thoải mái và tiện nghi trong suốt thời gian lưu trú.',
      image: 'images/room-class/Deluxe Room/P 301/R4_00807 copy.jpg',
      locations: [
        {
          name: 'Deluxe Room P 301',
          address: 'Tầng 3',
          image: 'images/room-class/Deluxe Room/P 301/R4_00834 copy.jpg'
        },
        {
          name: 'Deluxe Room P 401',
          address: 'Tầng 4',
          image: 'images/room-class/Deluxe Room/P 401/R4_00544 copy.jpg'
        },
        {
          name: 'Deluxe Room P 501',
          address: 'Tầng 5',
          image: 'images/room-class/Deluxe Room/P 501/R4_00378 copy.jpg'
        },
      ] 
    },
    EClass: {
      id: 'EClass',
      title: 'E Class',
      description: 'Phòng E Class với thiết kế độc đáo, phong cách hiện đại và không gian sống động. Mỗi phòng mang một chủ đề riêng biệt, tạo nên trải nghiệm lưu trú khác biệt và đầy cảm hứng.',
      image: 'images/room-class/E CLASS/Black Pink/R4_00195-HDR copy.jpg',
      locations: [
        {
          name: 'E Class - Black Pink',
          address: 'Phong cách hiện đại',
          image: 'images/room-class/E CLASS/Black Pink/R4_00214 copy.jpg'
        },
        {
          name: 'E Class - Pink Flower',
          address: 'Phong cách lãng mạn',
          image: 'images/room-class/E CLASS/Pink Flower/R4_00311 copy.jpg'
        },
        {
          name: 'E Class - Play Boy',
          address: 'Phong cách cá tính',
          image: 'images/room-class/E CLASS/Play Boy/R4_00252 copy.jpg'
        }
      ]
    },
    SClass: {
      id: 'SClass',
      title: 'S Class',
      description: 'Phòng S Class đẳng cấp với không gian rộng lớn, thiết kế sang trọng và dịch vụ đặc biệt. Đây là lựa chọn hoàn hảo cho những ai tìm kiếm trải nghiệm lưu trú cao cấp nhất.',
      image: 'images/room-class/S CLASS/50 ST/Bản sao của R4_00014 copy.jpg',
      locations: [
        {
          name: 'S Class - 50 ST',
          address: 'Phòng đặc biệt',
          image: 'images/room-class/S CLASS/50 ST/Bản sao của R4_00080 copy.jpg'
        },
        {
          name: 'S Class - 50 ST',
          address: 'Không gian sang trọng',
          image: 'images/room-class/S CLASS/50 ST/Bản sao của R4_00106 copy.jpg'
        },
        {
          name: 'S Class - 50 ST',
          address: 'Tiện nghi đẳng cấp',
          image: 'images/room-class/S CLASS/50 ST/Bản sao của R4_00119 copy.jpg'
        }
      ] 
    },
    SuperiorRoom: {
      id: 'SuperiorRoom',
      title: 'Superior Room',
      description: 'Phòng Superior với không gian thoải mái, thiết kế tinh tế và đầy đủ tiện nghi. Lựa chọn lý tưởng cho cả chuyến công tác và nghỉ dưỡng với chất lượng dịch vụ đáng tin cậy.',
      image: 'images/room-class/Superior Room/P 202/R4_00443 copy.jpg',
      locations: [
        {
          name: 'Superior Room P 202',
          address: 'Tầng 2',
          image: 'images/room-class/Superior Room/P 202/Bản sao của R4_00456 copy.jpg'
        },
        {
          name: 'Superior Room P 302',
          address: 'Tầng 3',
          image: 'images/room-class/Superior Room/P 302/Bản sao của R4_00708 copy.jpg'
        },
        {
          name: 'Superior Room P 402',
          address: 'Tầng 4',
          image: 'images/room-class/Superior Room/P 402/Bản sao của R4_00598 copy.jpg'
        }
      ] 
    }
  };

  constructor(private router: Router) {
    super();
  }

  changeTab(tabId: string): void {
    this.activeTab = tabId;
  }

  navigateToOrder() {
    this.router.navigate(['/order']);
  }

  get visibleRoomTypes(): Amenity[] {
    if (this.activeTab === 'all') {
      return Object.values(this.amenities);
    }
    return this.amenities[this.activeTab] ? [this.amenities[this.activeTab]] : [];
  }

  
}