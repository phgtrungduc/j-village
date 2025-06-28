#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Component templates
const templates = {
  basic: {
    ts: `import { Component, OnInit, OnDestroy } from '@angular/core';
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
  selector: 'app-{{componentName}}',
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
  templateUrl: './{{componentName}}.component.html',
  styleUrls: ['./{{componentName}}.component.scss']
})
export class {{componentClassName}}Component extends BaseComponent implements OnInit, OnDestroy {
  
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
    this.logger.info('{{componentClassName}}Component initialized');
    this.loadData();
  }

  ngOnDestroy(): void {
    this.logger.info('{{componentClassName}}Component destroyed');
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
}`,
    html: `<div class="container mx-auto px-4 py-8">
  <!-- Header Section -->
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      {{componentTitle}}
    </h1>
    <p class="text-gray-600">
      {{componentDescription}}
    </p>
  </div>

  <!-- Loading State -->
  <div *ngIf="isLoading" class="flex justify-center items-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>

  <!-- Main Content -->
  <div *ngIf="!isLoading" class="space-y-6">
    <!-- Content goes here -->
    <mat-card class="shadow-lg">
      <mat-card-content>
        <p>Your content here</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="onAction()">
          <i class="fas fa-plus mr-2"></i>
          Action Button
        </button>
      </mat-card-actions>
    </mat-card>
  </div>
</div>`,
    scss: `// Import variables
@import 'variables';

// Component specific styles
.{{componentName}} {
  // Your styles here
  
  .header {
    background: linear-gradient(135deg, $primary-color, $secondary-color);
  }
  
  .content {
    min-height: 400px;
  }
  
  // Responsive design
  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
  }
}

// Custom animations
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}`
  },
  
  form: {
    ts: `import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Services
import { LoggerService } from '../../common/service/logger.service';
import { SwalService } from '../../common/service/swal.service';

@Component({
  selector: 'app-{{componentName}}',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './{{componentName}}.component.html',
  styleUrls: ['./{{componentName}}.component.scss']
})
export class {{componentClassName}}Component implements OnInit, OnDestroy {
  
  public form: FormGroup;
  public isLoading: boolean = false;
  public submitted: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private logger: LoggerService,
    private swal: SwalService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.logger.info('{{componentClassName}}Component initialized');
  }

  ngOnDestroy(): void {
    this.logger.info('{{componentClassName}}Component destroyed');
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    
    if (this.form.valid) {
      this.isLoading = true;
      
      // TODO: Implement form submission
      console.log('Form data:', this.form.value);
      
      setTimeout(() => {
        this.isLoading = false;
        this.swal.success('Form submitted successfully!');
        this.form.reset();
        this.submitted = false;
      }, 1000);
    } else {
      this.swal.error('Please fill all required fields correctly.');
    }
  }

  public getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.errors && this.submitted) {
      if (control.errors['required']) return \`\${controlName} is required\`;
      if (control.errors['email']) return 'Please enter a valid email';
      if (control.errors['minlength']) return \`\${controlName} must be at least \${control.errors['minlength'].requiredLength} characters\`;
      if (control.errors['pattern']) return \`Please enter a valid \${controlName}\`;
    }
    return '';
  }
}`,
    html: `<div class="container mx-auto px-4 py-8 max-w-2xl">
  <div class="bg-white rounded-lg shadow-lg p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">{{componentTitle}}</h2>
    
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
      <!-- Name Field -->
      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Name</mat-label>
        <input matInput formControlName="name" placeholder="Enter your name">
        <mat-error *ngIf="getErrorMessage('name')">
          {{ getErrorMessage('name') }}
        </mat-error>
      </mat-form-field>

      <!-- Email Field -->
      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Email</mat-label>
        <input matInput formControlName="email" type="email" placeholder="Enter your email">
        <mat-error *ngIf="getErrorMessage('email')">
          {{ getErrorMessage('email') }}
        </mat-error>
      </mat-form-field>

      <!-- Phone Field -->
      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Phone</mat-label>
        <input matInput formControlName="phone" placeholder="Enter your phone number">
        <mat-error *ngIf="getErrorMessage('phone')">
          {{ getErrorMessage('phone') }}
        </mat-error>
      </mat-form-field>

      <!-- Message Field -->
      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Message</mat-label>
        <textarea matInput formControlName="message" rows="4" placeholder="Enter your message"></textarea>
        <mat-error *ngIf="getErrorMessage('message')">
          {{ getErrorMessage('message') }}
        </mat-error>
      </mat-form-field>

      <!-- Checkbox -->
      <div class="flex items-center">
        <mat-checkbox formControlName="agree" class="mr-2">
          I agree to the terms and conditions
        </mat-checkbox>
      </div>
      <div *ngIf="getErrorMessage('agree')" class="text-red-500 text-sm">
        {{ getErrorMessage('agree') }}
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end">
        <button 
          mat-raised-button 
          color="primary" 
          type="submit"
          [disabled]="isLoading"
          class="px-8 py-2">
          <span *ngIf="isLoading" class="animate-spin mr-2">⏳</span>
          {{ isLoading ? 'Submitting...' : 'Submit' }}
        </button>
      </div>
    </form>
  </div>
</div>`,
    scss: `// Import variables
@import 'variables';

// Component specific styles
.{{componentName}} {
  // Your styles here
  
  .form-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  // Responsive design
  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
  }
}`
  },
  
  list: {
    ts: `import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material Imports
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

// Services
import { LoggerService } from '../../common/service/logger.service';
import { SwalService } from '../../common/service/swal.service';

@Component({
  selector: 'app-{{componentName}}',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  templateUrl: './{{componentName}}.component.html',
  styleUrls: ['./{{componentName}}.component.scss']
})
export class {{componentClassName}}Component implements OnInit, OnDestroy {
  
  public dataSource: any[] = [];
  public displayedColumns: string[] = ['id', 'name', 'email', 'status', 'actions'];
  public isLoading: boolean = false;
  
  // Pagination
  public pageSize: number = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 50];
  public totalItems: number = 0;
  public currentPage: number = 0;
  
  // Sorting
  public sortActive: string = '';
  public sortDirection: 'asc' | 'desc' = 'asc';

  constructor(
    private logger: LoggerService,
    private swal: SwalService
  ) {}

  ngOnInit(): void {
    this.logger.info('{{componentClassName}}Component initialized');
    this.loadData();
  }

  ngOnDestroy(): void {
    this.logger.info('{{componentClassName}}Component destroyed');
  }

  private loadData(): void {
    this.isLoading = true;
    
    // TODO: Implement API call
    setTimeout(() => {
      this.dataSource = [
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' }
      ];
      this.totalItems = this.dataSource.length;
      this.isLoading = false;
    }, 1000);
  }

  public onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  public onSortChange(sort: Sort): void {
    this.sortActive = sort.active;
    this.sortDirection = sort.direction;
    this.loadData();
  }

  public onEdit(item: any): void {
    this.logger.info('Edit item:', item);
    // TODO: Implement edit logic
  }

  public onDelete(item: any): void {
    this.swal.confirm('Are you sure you want to delete this item?').then((result) => {
      if (result.isConfirmed) {
        this.logger.info('Delete item:', item);
        // TODO: Implement delete logic
        this.swal.success('Item deleted successfully!');
        this.loadData();
      }
    });
  }

  public onView(item: any): void {
    this.logger.info('View item:', item);
    // TODO: Implement view logic
  }
}`,
    html: `<div class="container mx-auto px-4 py-8">
  <!-- Header -->
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-3xl font-bold text-gray-900">{{componentTitle}}</h1>
    <button mat-raised-button color="primary" routerLink="/add">
      <i class="fas fa-plus mr-2"></i>
      Add New
    </button>
  </div>

  <!-- Loading State -->
  <div *ngIf="isLoading" class="flex justify-center items-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>

  <!-- Data Table -->
  <div *ngIf="!isLoading" class="bg-white rounded-lg shadow-lg overflow-hidden">
    <table mat-table [dataSource]="dataSource" matSort (matSortChange)="onSortChange($event)" class="w-full">
      
      <!-- ID Column -->
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>
        <td mat-cell *matCellDef="let element"> {{element.id}} </td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <!-- Email Column -->
      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>
        <td mat-cell *matCellDef="let element"> {{element.email}} </td>
      </ng-container>

      <!-- Status Column -->
      <ng-container matColumnDef="status">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>
        <td mat-cell *matCellDef="let element">
          <span [class]="element.status === 'Active' ? 'text-green-600' : 'text-red-600'">
            {{element.status}}
          </span>
        </td>
      </ng-container>

      <!-- Actions Column -->
      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef> Actions </th>
        <td mat-cell *matCellDef="let element">
          <button mat-icon-button [matMenuTriggerFor]="menu">
            <mat-icon>more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="onView(element)">
              <mat-icon>visibility</mat-icon>
              <span>View</span>
            </button>
            <button mat-menu-item (click)="onEdit(element)">
              <mat-icon>edit</mat-icon>
              <span>Edit</span>
            </button>
            <button mat-menu-item (click)="onDelete(element)" class="text-red-600">
              <mat-icon>delete</mat-icon>
              <span>Delete</span>
            </button>
          </mat-menu>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>

    <!-- Pagination -->
    <mat-paginator 
      [length]="totalItems"
      [pageSize]="pageSize"
      [pageSizeOptions]="pageSizeOptions"
      [pageIndex]="currentPage"
      (page)="onPageChange($event)"
      showFirstLastButtons>
    </mat-paginator>
  </div>

  <!-- Empty State -->
  <div *ngIf="!isLoading && dataSource.length === 0" class="text-center py-12">
    <i class="fas fa-inbox text-6xl text-gray-300 mb-4"></i>
    <h3 class="text-xl font-semibold text-gray-600 mb-2">No data found</h3>
    <p class="text-gray-500">Start by adding some items to see them here.</p>
  </div>
</div>`,
    scss: `// Import variables
@import 'variables';

// Component specific styles
.{{componentName}} {
  // Your styles here
  
  .table-container {
    overflow-x: auto;
  }
  
  // Responsive design
  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
  }
}`
  }
};

// Helper functions
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function toPascalCase(str) {
  return str.replace(/(^|-)([a-z])/g, (match, p1, p2) => p2.toUpperCase());
}

function replaceTemplateVariables(template, variables) {
  let result = template;
  Object.keys(variables).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, variables[key]);
  });
  return result;
}

function createComponentFiles(componentName, componentType, category, title, description) {
  const kebabCase = toKebabCase(componentName);
  const pascalCase = toPascalCase(componentName);
  
  // Create directory structure
  const componentPath = path.join('src', 'app', 'component', category, kebabCase);
  if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath, { recursive: true });
  }
  
  const template = templates[componentType];
  const variables = {
    componentName: kebabCase,
    componentClassName: pascalCase,
    componentTitle: title || pascalCase,
    componentDescription: description || `Component for ${pascalCase}`
  };
  
  // Create TypeScript file
  const tsContent = replaceTemplateVariables(template.ts, variables);
  fs.writeFileSync(path.join(componentPath, `${kebabCase}.component.ts`), tsContent);
  
  // Create HTML file
  const htmlContent = replaceTemplateVariables(template.html, variables);
  fs.writeFileSync(path.join(componentPath, `${kebabCase}.component.html`), htmlContent);
  
  // Create SCSS file
  const scssContent = replaceTemplateVariables(template.scss, variables);
  fs.writeFileSync(path.join(componentPath, `${kebabCase}.component.scss`), scssContent);
  
  console.log(`✅ Component created successfully!`);
  console.log(`📁 Location: ${componentPath}`);
  console.log(`📄 Files created:`);
  console.log(`   - ${kebabCase}.component.ts`);
  console.log(`   - ${kebabCase}.component.html`);
  console.log(`   - ${kebabCase}.component.scss`);
}

// CLI interface
function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log(`
🚀 MCP Component Generator for J-Village

Usage: node generate-component.js <componentName> <type> [category] [title] [description]

Arguments:
  componentName  - Name of the component (camelCase or PascalCase)
  type          - Component type: basic, form, or list
  category      - Category: Common, Pages, or Share (default: Common)
  title         - Component title (default: componentName)
  description   - Component description (default: auto-generated)

Examples:
  node generate-component.js userProfile basic Pages "User Profile" "User profile management"
  node generate-component.js contactForm form Share "Contact Form" "Contact form component"
  node generate-component.js userList list Pages "User List" "User list with pagination"

Available types:
  - basic: Basic component with loading state
  - form: Form component with validation
  - list: List component with table and pagination
    `);
    return;
  }
  
  const [componentName, type, category = 'Common', title, description] = args;
  
  if (!templates[type]) {
    console.error(`❌ Invalid component type: ${type}`);
    console.log(`Available types: ${Object.keys(templates).join(', ')}`);
    return;
  }
  
  try {
    createComponentFiles(componentName, type, category, title, description);
  } catch (error) {
    console.error(`❌ Error creating component: ${error.message}`);
  }
}

main(); 