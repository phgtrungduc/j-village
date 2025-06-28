import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button.component';

@Component({
  selector: 'app-custom-button-demo',
  standalone: true,
  imports: [
    CommonModule,
    CustomButtonComponent
  ],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Custom Button Component Demo</h1>
      
      <!-- Brand Colors Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">🎨 Brand Colors (Primary & Secondary)</h2>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-yellow-700">
                <strong>Brand Colors:</strong> Primary (#354a21 - Green) | Secondary (#ffb01f - Yellow)
              </p>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-4">
          <div class="text-center">
            <app-custom-button 
              text="Primary Button" 
              variant="primary"
              size="large"
              (clicked)="onButtonClick('Primary')">
            </app-custom-button>
            <p class="text-sm text-gray-600 mt-2">Primary (#354a21)</p>
          </div>
          
          <div class="text-center">
            <app-custom-button 
              text="Secondary Button" 
              variant="secondary"
              size="large"
              (clicked)="onButtonClick('Secondary')">
            </app-custom-button>
            <p class="text-sm text-gray-600 mt-2">Secondary (#ffb01f)</p>
          </div>
        </div>
      </section>

      <!-- Basic Buttons -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Basic Buttons</h2>
        <div class="flex flex-wrap gap-4">
          <app-custom-button 
            text="Primary Button" 
            variant="primary"
            (clicked)="onButtonClick('Primary')">
          </app-custom-button>
          
          <app-custom-button 
            text="Secondary Button" 
            variant="secondary"
            (clicked)="onButtonClick('Secondary')">
          </app-custom-button>
          
          <app-custom-button 
            text="Success Button" 
            variant="success"
            (clicked)="onButtonClick('Success')">
          </app-custom-button>
          
          <app-custom-button 
            text="Danger Button" 
            variant="danger"
            (clicked)="onButtonClick('Danger')">
          </app-custom-button>
        </div>
      </section>

      <!-- Button Sizes -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Button Sizes</h2>
        <div class="flex flex-wrap items-center gap-4">
          <app-custom-button 
            text="Small" 
            variant="primary"
            size="small"
            (clicked)="onButtonClick('Small')">
          </app-custom-button>
          
          <app-custom-button 
            text="Medium" 
            variant="primary"
            size="medium"
            (clicked)="onButtonClick('Medium')">
          </app-custom-button>
          
          <app-custom-button 
            text="Large" 
            variant="primary"
            size="large"
            (clicked)="onButtonClick('Large')">
          </app-custom-button>
        </div>
      </section>

      <!-- Buttons with Icons -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Buttons with Icons</h2>
        <div class="flex flex-wrap gap-4">
          <app-custom-button 
            text="Add Item" 
            variant="success"
            icon="fas fa-plus"
            iconPosition="left"
            (clicked)="onButtonClick('Add Item')">
          </app-custom-button>
          
          <app-custom-button 
            text="Download" 
            variant="info"
            icon="fas fa-download"
            iconPosition="right"
            (clicked)="onButtonClick('Download')">
          </app-custom-button>
          
          <app-custom-button 
            text="Delete" 
            variant="danger"
            icon="fas fa-trash"
            iconPosition="left"
            (clicked)="onButtonClick('Delete')">
          </app-custom-button>
        </div>
      </section>

      <!-- Button Variants -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Button Variants</h2>
        <div class="flex flex-wrap gap-4">
          <app-custom-button 
            text="Outlined" 
            variant="primary"
            [outlined]="true"
            (clicked)="onButtonClick('Outlined')">
          </app-custom-button>
          
          <app-custom-button 
            text="Rounded" 
            variant="success"
            [rounded]="true"
            (clicked)="onButtonClick('Rounded')">
          </app-custom-button>
          
          <app-custom-button 
            text="Flat" 
            variant="warning"
            [flat]="true"
            (clicked)="onButtonClick('Flat')">
          </app-custom-button>
        </div>
      </section>

      <!-- Button States -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Button States</h2>
        <div class="flex flex-wrap gap-4">
          <app-custom-button 
            text="Loading Button" 
            variant="primary"
            [loading]="true"
            (clicked)="onButtonClick('Loading')">
          </app-custom-button>
          
          <app-custom-button 
            text="Disabled Button" 
            variant="secondary"
            [disabled]="true"
            (clicked)="onButtonClick('Disabled')">
          </app-custom-button>
          
          <app-custom-button 
            text="Full Width" 
            variant="info"
            [fullWidth]="true"
            (clicked)="onButtonClick('Full Width')">
          </app-custom-button>
        </div>
      </section>

      <!-- All Color Variants -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">All Color Variants</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <app-custom-button 
            text="Primary" 
            variant="primary"
            (clicked)="onButtonClick('Primary')">
          </app-custom-button>
          
          <app-custom-button 
            text="Secondary" 
            variant="secondary"
            (clicked)="onButtonClick('Secondary')">
          </app-custom-button>
          
          <app-custom-button 
            text="Success" 
            variant="success"
            (clicked)="onButtonClick('Success')">
          </app-custom-button>
          
          <app-custom-button 
            text="Danger" 
            variant="danger"
            (clicked)="onButtonClick('Danger')">
          </app-custom-button>
          
          <app-custom-button 
            text="Warning" 
            variant="warning"
            (clicked)="onButtonClick('Warning')">
          </app-custom-button>
          
          <app-custom-button 
            text="Info" 
            variant="info"
            (clicked)="onButtonClick('Info')">
          </app-custom-button>
          
          <app-custom-button 
            text="Light" 
            variant="light"
            (clicked)="onButtonClick('Light')">
          </app-custom-button>
          
          <app-custom-button 
            text="Dark" 
            variant="dark"
            (clicked)="onButtonClick('Dark')">
          </app-custom-button>
        </div>
      </section>

      <!-- Usage Examples -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Usage Examples</h2>
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-medium text-gray-700 mb-4">Brand Colors Usage:</h3>
          <pre class="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
&lt;!-- Primary Button (Main brand color) --&gt;
&lt;app-custom-button 
  text="Submit" 
  variant="primary"
  (clicked)="onSubmit()"&gt;
&lt;/app-custom-button&gt;

&lt;!-- Secondary Button (Accent color) --&gt;
&lt;app-custom-button 
  text="Cancel" 
  variant="secondary"
  (clicked)="onCancel()"&gt;
&lt;/app-custom-button&gt;</pre>

          <h3 class="text-lg font-medium text-gray-700 mb-4 mt-6">With Icon:</h3>
          <pre class="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
&lt;app-custom-button 
  text="Save" 
  variant="primary"
  icon="fas fa-save"
  iconPosition="left"
  (clicked)="saveData()"&gt;
&lt;/app-custom-button&gt;</pre>

          <h3 class="text-lg font-medium text-gray-700 mb-4 mt-6">Loading State:</h3>
          <pre class="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
&lt;app-custom-button 
  text="Submit" 
  variant="primary"
  [loading]="isSubmitting"
  (clicked)="submitForm()"&gt;
&lt;/app-custom-button&gt;</pre>
        </div>
      </section>

      <!-- Color Palette -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">🎨 Color Palette</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-green-700 text-white p-4 rounded-lg text-center">
            <div class="text-lg font-bold">Primary</div>
            <div class="text-sm">#354a21</div>
            <div class="text-xs mt-2">Main brand color</div>
          </div>
          <div class="bg-yellow-500 text-white p-4 rounded-lg text-center">
            <div class="text-lg font-bold">Secondary</div>
            <div class="text-sm">#ffb01f</div>
            <div class="text-xs mt-2">Accent color</div>
          </div>
          <div class="bg-green-500 text-white p-4 rounded-lg text-center">
            <div class="text-lg font-bold">Success</div>
            <div class="text-sm">#00B63E</div>
            <div class="text-xs mt-2">Success actions</div>
          </div>
          <div class="bg-red-500 text-white p-4 rounded-lg text-center">
            <div class="text-lg font-bold">Danger</div>
            <div class="text-sm">#FF0000</div>
            <div class="text-xs mt-2">Delete/Error</div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class CustomButtonDemoComponent {
  
  onButtonClick(buttonType: string): void {
    console.log(`${buttonType} button clicked!`);
    // You can add your logic here
  }
} 