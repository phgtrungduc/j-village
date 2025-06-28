import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

// Bootstrap Imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

// Services
import { LoggerService } from '../../common/service/logger.service';
import { SwalService } from '../../common/service/swal.service';

// Models
import { BaseComponent } from '../../common/base.component';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BsDropdownModule,
    ModalModule
  ],
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent extends BaseComponent implements OnInit, OnDestroy {
  
  // Properties
  public isLoading: boolean = false;
  public data: any[] = [];
  
  constructor(
    private logger: LoggerService,
    private swal: SwalService
  ) {
    super();
  }

  ngOnInit(): void {
    this.logger.info('TestComponentComponent initialized');
    this.loadData();
  }

  ngOnDestroy(): void {
    this.logger.info('TestComponentComponent destroyed');
  }

  // Methods
  private loadData(): void {
    this.isLoading = true;
    // TODO: Implement data loading logic
    this.isLoading = false;
  }

  public onAction(): void {
    this.swal.success('Action completed successfully!');
  }
}