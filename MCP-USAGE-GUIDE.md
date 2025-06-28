# 🚀 Hướng dẫn sử dụng MCP Component Generator

## 📋 Tổng quan

MCP (Model Context Protocol) Component Generator là công cụ tự động tạo component Angular theo chuẩn của dự án J-Village. Công cụ này giúp:

- ✅ Tạo component nhanh chóng và nhất quán
- ✅ Tuân thủ coding standards
- ✅ Tái sử dụng templates có sẵn
- ✅ Giảm thiểu lỗi syntax

## 🛠️ Cài đặt và Setup

### 1. Kiểm tra cấu trúc dự án
```
j-village/
├── scripts/
│   └── generate-component.js    # Script generator
├── mcp-component-generator.md   # MCP templates
├── MCP-USAGE-GUIDE.md          # File này
└── package.json
```

### 2. Cấp quyền thực thi cho script (Linux/Mac)
```bash
chmod +x scripts/generate-component.js
```

## 🎯 Cách sử dụng

### Phương pháp 1: Sử dụng npm script (Khuyến nghị)

```bash
# Cú pháp cơ bản
npm run generate:component <componentName> <type> [category] [title] [description]

# Ví dụ:
npm run generate:component userProfile basic Pages "User Profile" "User profile management"
npm run generate:component contactForm form Share "Contact Form" "Contact form component"
npm run generate:component userList list Pages "User List" "User list with pagination"
```

### Phương pháp 2: Sử dụng Node.js trực tiếp

```bash
# Cú pháp
node scripts/generate-component.js <componentName> <type> [category] [title] [description]

# Ví dụ:
node scripts/generate-component.js dashboard basic Pages "Dashboard" "Main dashboard page"
```

## 📝 Tham số

| Tham số | Bắt buộc | Mô tả | Ví dụ |
|---------|----------|-------|-------|
| `componentName` | ✅ | Tên component (camelCase/PascalCase) | `userProfile`, `UserProfile` |
| `type` | ✅ | Loại component | `basic`, `form`, `list` |
| `category` | ❌ | Thư mục chứa component | `Common`, `Pages`, `Share` |
| `title` | ❌ | Tiêu đề hiển thị | `"User Profile"` |
| `description` | ❌ | Mô tả component | `"User profile management"` |

## 🎨 Loại Component

### 1. **Basic Component** (`basic`)
- Component cơ bản với loading state
- Error handling
- Responsive design
- Material UI components

**Sử dụng khi:** Tạo component hiển thị thông tin đơn giản

### 2. **Form Component** (`form`)
- Form với validation
- Error messages
- Loading state khi submit
- Material form controls

**Sử dụng khi:** Tạo form nhập liệu

### 3. **List Component** (`list`)
- Data table với pagination
- Sorting functionality
- Action buttons (View, Edit, Delete)
- Empty state handling

**Sử dụng khi:** Tạo trang danh sách dữ liệu

## 📁 Cấu trúc thư mục

```
src/app/component/
├── Common/          # Components dùng chung
├── Pages/           # Page components
└── Share/           # Reusable components
```

## 🔧 Ví dụ thực tế

### Ví dụ 1: Tạo component User Profile
```bash
npm run generate:component userProfile basic Pages "User Profile" "User profile management page"
```

**Kết quả:**
```
src/app/component/Pages/user-profile/
├── user-profile.component.ts
├── user-profile.component.html
└── user-profile.component.scss
```

### Ví dụ 2: Tạo component Contact Form
```bash
npm run generate:component contactForm form Share "Contact Form" "Contact form component"
```

**Kết quả:**
```
src/app/component/Share/contact-form/
├── contact-form.component.ts
├── contact-form.component.html
└── contact-form.component.scss
```

### Ví dụ 3: Tạo component Product List
```bash
npm run generate:component productList list Pages "Product List" "Product management with pagination"
```

**Kết quả:**
```
src/app/component/Pages/product-list/
├── product-list.component.ts
├── product-list.component.html
└── product-list.component.scss
```

## 🔄 Workflow sử dụng

### Bước 1: Tạo component
```bash
npm run generate:component myComponent basic Pages "My Component"
```

### Bước 2: Kiểm tra files được tạo
```
✅ Component created successfully!
📁 Location: src/app/component/Pages/my-component
📄 Files created:
   - my-component.component.ts
   - my-component.component.html
   - my-component.component.scss
```

### Bước 3: Customize component
- Chỉnh sửa logic trong `.ts` file
- Cập nhật UI trong `.html` file
- Thêm styles trong `.scss` file

### Bước 4: Thêm routing (nếu cần)
```typescript
// app.routes.ts
{
  path: 'my-component',
  component: MyComponentComponent
}
```

## 🎯 Best Practices

### 1. **Naming Conventions**
- ✅ `userProfile` → `user-profile.component.ts`
- ✅ `UserProfile` → `user-profile.component.ts`
- ❌ `user_profile` (không dùng underscore)

### 2. **Category Selection**
- `Common`: Components dùng chung (header, footer, sidebar)
- `Pages`: Page components (dashboard, user-profile, settings)
- `Share`: Reusable components (buttons, cards, modals)

### 3. **Component Type Selection**
- `basic`: Component hiển thị thông tin
- `form`: Component có form nhập liệu
- `list`: Component hiển thị danh sách

## 🐛 Troubleshooting

### Lỗi thường gặp

#### 1. "Invalid component type"
```bash
❌ Invalid component type: invalid
Available types: basic, form, list
```
**Giải pháp:** Sử dụng đúng type: `basic`, `form`, hoặc `list`

#### 2. "Error creating component"
```bash
❌ Error creating component: ENOENT: no such file or directory
```
**Giải pháp:** Kiểm tra quyền ghi file và đường dẫn

#### 3. Component không được tạo
**Giải pháp:** 
- Kiểm tra cú pháp command
- Đảm bảo đang ở thư mục gốc của dự án
- Kiểm tra Node.js đã được cài đặt

## 🔧 Customization

### Thêm template mới

1. Mở file `scripts/generate-component.js`
2. Thêm template vào object `templates`
3. Cập nhật help text

### Thay đổi imports

1. Chỉnh sửa imports trong template
2. Cập nhật theo nhu cầu dự án

## 📚 Tài liệu tham khảo

- [MCP Component Generator](./mcp-component-generator.md) - Templates chi tiết
- [Angular Documentation](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Đóng góp

Để cải thiện MCP Component Generator:

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## 📞 Hỗ trợ

Nếu gặp vấn đề hoặc có câu hỏi:

1. Kiểm tra [Troubleshooting](#-troubleshooting)
2. Xem [Best Practices](#-best-practices)
3. Tạo issue trên repository

---

**Happy Coding! 🎉** 