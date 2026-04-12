import { Component, HostListener, Input } from '@angular/core';
import { Room } from '../../../model/room.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AmenityItemComponent } from '../amenity-item/amenity-item.component';
import { VndCurrencyPipe } from '../../../common/pipes/vnd-currency.pipe';
import { getRoomPricingRow, RoomPricingRow } from '../../../data/room-pricing-detail.data';

@Component({
  selector: 'room-order-card',
  imports: [CommonModule, RouterModule, AmenityItemComponent, VndCurrencyPipe],
  templateUrl: './room-order-card.component.html',
  styleUrl: './room-order-card.component.scss',
})
export class RoomOrderCardComponent {
  @Input() currentRoom: Room = {} as Room;

  pricingModalOpen = false;

  get activePricingRow(): RoomPricingRow | null {
    return getRoomPricingRow(this.currentRoom?.RoomClass);
  }

  openPricingModal(): void {
    this.pricingModalOpen = true;
  }

  closePricingModal(): void {
    this.pricingModalOpen = false;
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.pricingModalOpen) {
      this.closePricingModal();
    }
  }
}
