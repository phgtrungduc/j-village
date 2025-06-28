# 🎯 Custom Button Component

Component button tái sử dụng với nhiều variants và states khác nhau cho dự án J-Village.

## 🎨 Brand Colors

Component này sử dụng màu brand chính thức của dự án:

- **Primary**: `#354a21` (Xanh lá đậm) - Màu chính của brand
- **Secondary**: `#ffb01f` (Vàng) - Màu phụ của brand

## ✨ Tính năng

- 🎨 **8 Color Variants**: primary, secondary, success, danger, warning, info, light, dark
- 📏 **3 Sizes**: small, medium, large
- 🔄 **Loading State**: với spinner animation
- 🚫 **Disabled State**: không thể click khi disabled
- 🎯 **Icon Support**: icon bên trái hoặc phải
- 📱 **Responsive**: tự động điều chỉnh trên mobile
- 🌙 **Dark Mode**: hỗ trợ dark mode
- ♿ **Accessibility**: focus states và keyboard navigation

## 🚀 Cách sử dụng

### 1. Import Component

```typescript
import { CustomButtonComponent } from './path/to/custom-button.component';

@Component({
  imports: [CustomButtonComponent],
  // ...
})
```

### 2. Basic Usage

```html
<app-custom-button 
  text="Click Me" 
  variant="primary"
  (clicked)="onButtonClick()">
</app-custom-button>
```

### 3. Với Icon

```html
<app-custom-button 
  text="Save" 
  variant="primary"
  icon="fas fa-save"
  iconPosition="left"
  (clicked)="saveData()">
</app-custom-button>
```

### 4. Loading State

```html
<app-custom-button 
  text="Submit" 
  variant="primary"
  [loading]="isSubmitting"
  (clicked)="submitForm()">
</app-custom-button>
```

## 📋 Props

| Prop | Type | Default | Mô tả |
|------|------|---------|-------|
| `text` | `string` | `'Button'` | Text hiển thị trên button |
| `variant` | `ButtonVariant` | `'primary'` | Màu sắc của button |
| `size` | `ButtonSize` | `'medium'` | Kích thước button |
| `type` | `ButtonType` | `'button'` | HTML button type |
| `disabled` | `boolean` | `false` | Disable button |
| `loading` | `boolean` | `false` | Hiển thị loading state |
| `icon` | `string` | `''` | CSS class của icon |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Vị trí icon |
| `fullWidth` | `boolean` | `false` | Button full width |
| `rounded` | `boolean` | `false` | Border radius tròn |
| `outlined` | `boolean` | `false` | Style outlined |
| `flat` | `boolean` | `false` | Style flat |
| `customClass` | `string` | `''` | CSS class tùy chỉnh |

## 🎨 Variants

### Brand Colors (Khuyến nghị sử dụng)

```html
<!-- Primary Button (Màu chính của brand) -->
<app-custom-button variant="primary" text="Submit"></app-custom-button>

<!-- Secondary Button (Màu phụ của brand) -->
<app-custom-button variant="secondary" text="Cancel"></app-custom-button>
```

### Other Color Variants

```html
<!-- Success -->
<app-custom-button variant="success" text="Success"></app-custom-button>

<!-- Danger -->
<app-custom-button variant="danger" text="Danger"></app-custom-button>

<!-- Warning -->
<app-custom-button variant="warning" text="Warning"></app-custom-button>

<!-- Info -->
<app-custom-button variant="info" text="Info"></app-custom-button>

<!-- Light -->
<app-custom-button variant="light" text="Light"></app-custom-button>

<!-- Dark -->
<app-custom-button variant="dark" text="Dark"></app-custom-button>
```

### Size Variants

```html
<app-custom-button size="small" text="Small"></app-custom-button>
<app-custom-button size="medium" text="Medium"></app-custom-button>
<app-custom-button size="large" text="Large"></app-custom-button>
```

### Style Variants

```html
<!-- Outlined -->
<app-custom-button [outlined]="true" text="Outlined"></app-custom-button>

<!-- Rounded -->
<app-custom-button [rounded]="true" text="Rounded"></app-custom-button>

<!-- Flat -->
<app-custom-button [flat]="true" text="Flat"></app-custom-button>
```

## 📡 Events

| Event | Type | Mô tả |
|-------|------|-------|
| `clicked` | `EventEmitter<void>` | Emit khi button được click |
| `mouseEnter` | `EventEmitter<void>` | Emit khi mouse enter |
| `mouseLeave` | `EventEmitter<void>` | Emit khi mouse leave |

## 🔧 Examples

### Form Submit Button (Primary)

```html
<app-custom-button 
  text="Submit Form" 
  variant="primary"
  type="submit"
  icon="fas fa-paper-plane"
  [loading]="isSubmitting"
  [disabled]="!form.valid"
  (clicked)="onSubmit()">
</app-custom-button>
```

### Cancel Button (Secondary)

```html
<app-custom-button 
  text="Cancel" 
  variant="secondary"
  icon="fas fa-times"
  (clicked)="onCancel()">
</app-custom-button>
```

### Delete Button

```html
<app-custom-button 
  text="Delete" 
  variant="danger"
  icon="fas fa-trash"
  [loading]="isDeleting"
  (clicked)="confirmDelete()">
</app-custom-button>
```

### Full Width Button

```html
<app-custom-button 
  text="Continue" 
  variant="primary"
  [fullWidth]="true"
  (clicked)="nextStep()">
</app-custom-button>
```

### Icon Only Button

```html
<app-custom-button 
  text="" 
  variant="light"
  icon="fas fa-cog"
  [rounded]="true"
  size="small"
  (clicked)="openSettings()">
</app-custom-button>
```

## 🎯 Best Practices

### 1. **Brand Color Usage**
- Sử dụng `variant="primary"` cho các action chính (Submit, Save, Continue)
- Sử dụng `variant="secondary"` cho các action phụ (Cancel, Back, Reset)
- Sử dụng các màu khác cho các trường hợp đặc biệt (Success, Danger, Warning)

### 2. **Icon Usage**
- Sử dụng FontAwesome icons: `fas fa-*`, `far fa-*`, `fab fa-*`
- Icon position mặc định là `left`
- Với icon-only buttons, để `text=""`

### 3. **Loading States**
- Luôn sử dụng `[loading]="true"` cho async operations
- Loading state sẽ tự động disable button
- Text sẽ thay đổi thành "Loading..."

### 4. **Accessibility**
- Luôn cung cấp `text` có ý nghĩa
- Sử dụng `type="submit"` cho form buttons
- Disable button khi không thể thực hiện action

### 5. **Responsive Design**
- Button sizes tự động điều chỉnh trên mobile
- Sử dụng `[fullWidth]="true"` cho mobile-first design

## 🎨 Customization

### Thêm Custom CSS Class

```html
<app-custom-button 
  text="Custom Button"
  customClass="my-custom-button"
  (clicked)="onClick()">
</app-custom-button>
```

### Override Styles

```scss
// Trong component của bạn
.my-custom-button {
  // Override styles
  background: linear-gradient(135deg, #your-color, #your-color-dark);
  
  &:hover {
    background: linear-gradient(135deg, #your-color-dark, #your-color-darker);
  }
}
```

## 🔍 Demo

Xem demo đầy đủ tại: `CustomButtonDemoComponent`

```typescript
import { CustomButtonDemoComponent } from './custom-button-demo.component';
```

Truy cập: `http://localhost:4200/button-demo`

## 📚 TypeScript Types

```typescript
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';
```

## 🎨 Color Reference

| Variant | Hex Code | Usage |
|---------|----------|-------|
| Primary | `#354a21` | Main brand color, primary actions |
| Secondary | `#ffb01f` | Accent color, secondary actions |
| Success | `#00B63E` | Success states, confirmations |
| Danger | `#FF0000` | Delete actions, errors |
| Warning | `#FF8800` | Warning states |
| Info | `#0070F4` | Information actions |
| Light | `#f8fafc` | Light background |
| Dark | `#1e293b` | Dark background |

## 🤝 Contributing

Để cải thiện component:

1. Thêm variants mới vào `ButtonVariant` type
2. Cập nhật SCSS với styles cho variant mới
3. Thêm vào demo component
4. Cập nhật documentation

---

**Happy Coding! 🎉** 