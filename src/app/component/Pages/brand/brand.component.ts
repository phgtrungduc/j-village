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
  
  constructor() {
    super();
  }
}