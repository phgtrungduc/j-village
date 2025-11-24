import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {
  items = [
    {
      icon: 'fas fa-bolt',
      title: 'Đặt phòng nhanh chóng',
      description: 'Quy trình đặt phòng đơn giản, chỉ vài phút là hoàn tất'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Thanh toán an toàn',
      description: 'Hệ thống thanh toán bảo mật, an toàn tuyệt đối'
    },
    {
      icon: 'fas fa-headset',
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ'
    },
    {
      icon: 'fas fa-tag',
      title: 'Ưu đãi độc quyền',
      description: 'Nhiều chương trình khuyến mãi hấp dẫn dành riêng cho bạn'
    },
    {
      icon: 'fas fa-star',
      title: 'Điểm thưởng tích lũy',
      description: 'Tích điểm với mỗi lần đặt phòng và đổi thành quà tặng'
    },
    {
      icon: 'fas fa-gift',
      title: 'Đổi quà miễn phí',
      description: 'Sử dụng điểm tích lũy để đổi các phần quà giá trị'
    }
  ];

  ngOnInit(): void {
    this.observeElements();
  }

  observeElements(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt((entry.target as HTMLElement).getAttribute('data-index') || '0', 10);
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    setTimeout(() => {
      const elements = document.querySelectorAll('.why-choose-item');
      elements.forEach(el => observer.observe(el));
    }, 200);
  }
}

