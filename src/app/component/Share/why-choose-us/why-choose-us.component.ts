import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {
  items = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Vị trí đắc địa',
      description: '45 địa điểm được chọn lọc tại các vị trí thuận tiện nhất.'
    },
    {
      icon: 'fas fa-building',
      title: 'Đa dạng phân khúc',
      description: '1700+ phòng – 4 thương hiệu – đáp ứng linh hoạt mọi nhu cầu.'
    },
    {
      icon: 'fas fa-percent',
      title: 'Đặc quyền ưu đãi',
      description: 'Giá tốt hơn – Chính sách linh hoạt - Điều khoản rõ ràng.'
    },
    {
      icon: 'fas fa-headphones',
      title: 'Hỗ trợ chuyên biệt',
      description: 'Luôn đồng hành – Phản hồi nhanh'
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Tiết kiệm thời gian',
      description: 'Quy trình tối giản – Nhanh gọn mọi khâu - Trải nghiệm tuyệt vời!'
    },
    {
      icon: 'fas fa-ribbon',
      title: 'Chương trình thành viên cho doanh nghiệp',
      description: 'Trở thành hội viên Bạc dễ dàng & nhanh chóng.'
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

