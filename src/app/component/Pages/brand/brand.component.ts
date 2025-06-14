import { Component } from '@angular/core';
import { BaseComponent } from '../../../common/base.component';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
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
      image: 'assets/images/hotels/roomA.jpg',
      locations: [
        {
          name: 'Hạng A By J Village',
          address: 'Lê Thánh Tôn',
          image: 'assets/images/hotels/room1.jpg'
        },
        {
          name: 'Hạng A By J Village',
          address: 'Hải Bà Trưng',
          image: 'assets/images/hotels/room2.jpg'
        },
        {
          name: 'Hạng A By J Village',
          address: 'Thợ Nhuộm',
          image: 'assets/images/hotels/room3.jpg'
        }
      ]
    },
    classB: {
      id: 'classB',
      title: 'Hạng B',
      description: 'Trải nghiệm không gian với thiết kế hiện đại, thông minh, tận dụng tối đa ánh sáng tự nhiên và những tiện nghi cần thiết cho một kỳ nghỉ thoải mái. Vị trí thuận lợi giúp bạn dễ dàng khám phá thành phố.',
      image: 'assets/images/hotels/roomB.jpg',
      locations: [
        {
          name: 'Hạng B By J Village',
          address: 'Láng Hạ',
          image: 'assets/images/hotels/room1.jpg'
        },
        {
          name: 'Hạng B By J Village',
          address: 'Trần Nhân Tông',
          image: 'assets/images/hotels/room2.jpg'
        },
        {
          name: 'Hạng B By J Village',
          address: 'Cầu Giấy',
          image: 'assets/images/hotels/room3.jpg'
        }
      ]
    },
    standard: {
      id: 'standard',
      title: 'Hạng Thường',
      description: 'Không gian tiện nghi với đầy đủ tiện ích cơ bản phục vụ nhu cầu nghỉ dưỡng và công tác. Lựa chọn kinh tế nhưng vẫn đảm bảo chất lượng và sự thoải mái cho du khách trong suốt thời gian lưu trú.',
      image: 'assets/images/hotels/roomStandard.jpg',
      locations: [
        {
          name: 'Hạng Thường By J Village',
          address: 'Mỹ Đình',
          image: 'assets/images/hotels/room1.jpg'
        },
        {
          name: 'Hạng Thường By J Village',
          address: 'Đội Cấn',
          image: 'assets/images/hotels/room2.jpg'
        },
        {
          name: 'Hạng Thường By J Village',
          address: 'Hoàn Kiếm',
          image: 'assets/images/hotels/room3.jpg'
        }
      ]
    }
  };

  selectedRoom: RoomType = this.roomTypes.classA;

  constructor() {
    super();
  }

  changeTab(tabId: string): void {
    this.activeTab = tabId;
    
    if (tabId !== 'all') {
      this.selectedRoom = this.roomTypes[tabId];
    } else {
      // Mặc định hiển thị phòng Hạng A khi tab "Tất cả" được chọn
      this.selectedRoom = this.roomTypes.classA;
    }
  }
}