import { Component } from '@angular/core';
import { BaseComponent } from '../../../common/base.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input'; // nếu bạn dùng <input matInput>
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RoomOrderCardComponent } from '../../Share/room-order-card/room-order-card.component';
import { Room } from '../../../model/room.model';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule , FormsModule, MatSliderModule, MatIconModule , RoomOrderCardComponent, NgxPaginationModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent extends BaseComponent {
  rooms: Room[]  = [
    {
      Id: 'R001',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/1.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R002',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/2.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R003',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/3.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
    {
      Id: 'R004',
      Name: 'J VILLAGE PREMIER HOTEL THI SÁCH',
      Description: 'Trải nghiệm một hơi thở Á Đông độc đáo giữa nhịp sống đa sắc màu tại Phố Nhật, Quận 1. M Village Premier Hotel Thi Sách chào đón bạn với 79 căn phòng hiện đại, ngập tràn ánh sáng tự nhiên và tầm nhìn xanh mát từ đường Thi Sách—nơi giao thoa giữa nét đẹp Á Đông và hơi thở Sài Gòn hiện đại. Tại đây, mỗi khoảnh khắc đều được chăm chút để mang đến trải nghiệm tinh tế: từ nhà hàng phong cách đến hồ bơi nhiệt đới duy nhất trong khu vực. Không chỉ dừng lại ở không gian nghỉ dưỡng, hành trình vị giác của bạn sẽ tiếp tục với Every Half và The Lounge—nơi cà phê sáng kéo dài đến những ly cocktail thư giãn sau ngày dài, trở thành điểm hẹn yêu thích của cả người bản địa lẫn du khách. Hãy đến và tận hưởng M Village Premier Hotel Thi Sách theo cách riêng của bạn.',
      ImageUrl: 'assets/images/room-card-order/4.jpg',
      Tags: 'Nghỉ dưỡng, công tác ngắn ngày, Staycation',
      Price: 1850000
    } as Room,
  ];


    //sldier
  price = 5400000;
  selectedCategory = '';
  checkOut = null;
  checkIn = null;
  category =  '';
  min = 400000;
  max = 5400000;
  value = 500000; 


  //paging 
  page = 1;

  constructor() {
    super();
  }
}