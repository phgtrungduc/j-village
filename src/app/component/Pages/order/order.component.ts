import { Component } from '@angular/core';
import { BaseComponent } from '../../../common/base.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlider } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input'; // nếu bạn dùng <input matInput>
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule , FormsModule, MatSlider, MatIcon ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent extends BaseComponent {
  rooms = [
    {
      name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      price: 1850000,
      tags: 'Nghỉ dưỡng, Công tác ngắn ngày, Staycation',
      description: 'Trải nghiệm một hơi thở Á Đông độc đáo...',
      image: 'https://via.placeholder.com/300x180?text=Phòng+1'
    },
    {
      name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      price: 1850000,
      tags: 'Nghỉ dưỡng, Công tác ngắn ngày, Staycation',
      description: 'Khách sạn hiện đại, ngập tràn ánh sáng...',
      image: 'https://via.placeholder.com/300x180?text=Phòng+2'
    }
  ];

  price = 5400000;
  selectedCategory = '';
  checkOut = null;
  checkIn = null;
  category =  '';


  min = 400000;
  max = 5400000;
  value = 2000000; // Giá chọn mặc định

  constructor() {
    super();
  }
}