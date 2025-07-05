import { Component } from '@angular/core';
import { BaseComponent } from '../../../common/base.component';
import { CommonModule } from '@angular/common';
import { MemberSectionComponent } from '../../Share/member-section/member-section.component';

interface RoomType {
  id: string;
  title: string;
  description: string;
  image: string;
  locations: Location[];
}

interface Location {
  name: string;
  address: string;
  image: string;
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
  
  roomTypes: {[key: string]: RoomType} = {
    classA: {
      id: 'classA',
      title: 'Hạng A',
      description: 'Bộ sưu tập không gian nghỉ dưỡng với tiện ích sang trọng và vị trí đặc địa bậc nhất. Hơn thế nữa, kết nối con người và cảm hứng bản địa trong thiết kế tại đây sẽ cho bạn trải nghiệm cao cấp thế hệ mới.',
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
        }
      ]
    },
    classB: {
      id: 'classB',
      title: 'Hạng B',
      description: 'Bộ sưu tập Không gian Thế hệ mới với thiết kế "bespoke", đặc trưng bởi các tiện ích từ do như café, game zone, sảnh co-working, bếp chung để bạn tự do sáng tạo trải nghiệm.',
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
    standard: {
      id: 'standard',
      title: 'Hạng Thường',
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

  constructor() {
    super();
  }

  changeTab(tabId: string): void {
    this.activeTab = tabId;
  }

  get visibleRoomTypes(): RoomType[] {
    if (this.activeTab === 'all') {
      return Object.values(this.roomTypes);
    }
    return this.roomTypes[this.activeTab] ? [this.roomTypes[this.activeTab]] : [];
  }
}