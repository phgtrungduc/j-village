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
    Signature: {
      id: 'Signature',
      title: 'Signature',
      description: 'Trải nghiệm đỉnh cao với không gian nghỉ dưỡng sang trọng, thiết kế tinh tế và dịch vụ cá nhân hóa chuẩn quốc tế. Signature by J Village là lựa chọn lý tưởng cho những ai tìm kiếm sự khác biệt và đẳng cấp.',
      image: 'images/room-card/1.jpg',
      locations: [
        {
          name: 'Hạng A By J Village',
          address: 'Lê Thánh Tôn',
          image: 'images/room-card/1.jpg'
        },
        {
          name: 'Hạng A By J Village',
          address: 'Hải Bà Trưng',
          image: 'images/room-card/2.jpg'
        },
        {
          name: 'Hạng A By J Village',
          address: 'Thợ Nhuộm',
          image: 'images/room-card/3.jpg'
        },
      ] 
    },
    JVillageHotel: {
      id: 'J Village Hotel',
      title: 'J Village Hotel',
      description: 'Không gian hiện đại, trẻ trung với đầy đủ tiện ích như café, khu giải trí, co-working và bếp chung. J Village Hotel mang đến sự linh hoạt và sáng tạo cho mọi chuyến đi công tác hay nghỉ dưỡng.',
      image: 'images/room-card/2.jpg',
      locations: [
        {
          name: 'Hạng B By J Village',
          address: 'Lê Thánh Tôn',
          image: 'images/room-card/2.jpg'
        },
        {
          name: 'Hạng B By J Village',
          address: 'Hải Bà Trưng',
          image: 'images/room-card/3.jpg'
        },
        {
          name: 'Hạng B By J Village',
          address: 'Thợ Nhuộm',
          image: 'images/room-card/1.jpg'
        }
      ]
    },
    CityView: {
      id: 'City view',
        title: 'City view',
        description: 'Không gian tiện nghi với đầy đủ tiện ích cơ bản phục vụ nhu cầu nghỉ dưỡng và công tác. Lựa chọn kinh tế nhưng vẫn đảm bảo chất lượng và sự thoải mái cho du khách trong suốt thời gian lưu trú.',
      image: 'images/room-card/3.jpg',
      locations: [
        {
          name: 'Hạng Thường By J Village',
          address: 'Mỹ Đình',
          image: 'images/room-card/3.jpg'
        },
        {
          name: 'Hạng Thường By J Village',
          address: 'Đội Cấn',
          image: 'images/room-card/1.jpg'
        },
        {
          name: 'Hạng Thường By J Village',
          address: 'Hoàn Kiếm',
          image: 'images/room-card/2.jpg'
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