# 🛒 Shopping Cart App

A modern, responsive shopping cart application built with React, Redux Toolkit, and Tailwind CSS. This e-commerce solution provides a seamless shopping experience with intuitive cart management features.

![React](https://img.shields.io/badge/React-19.1.1-blue.svg)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.9.0-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-cyan.svg)
![React Router](https://img.shields.io/badge/React%20Router-7.9.0-red.svg)

## ✨ Features

- 🏪 **Product Catalog** - Browse through a curated selection of 10 premium products
- 🛒 **Smart Cart Management** - Add, remove, and update item quantities with ease
- 💰 **Real-time Pricing** - Automatic total calculation with instant updates
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, intuitive interface with smooth animations
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **State Management** - Robust Redux Toolkit implementation for reliable state handling

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shoppingcart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```
shoppingcart/
├── src/
│   ├── app/
│   │   └── store.js              # Redux store configuration
│   ├── features/
│   │   └── cartSlice.js          # Cart state management
│   ├── pages/
│   │   ├── HomePage.jsx          # Landing page with hero & products
│   │   ├── Products.jsx          # Product catalog
│   │   ├── Cart.jsx              # Shopping cart interface
│   │   ├── Navbar.jsx            # Navigation component
│   │   ├── Footer.jsx            # Footer component
│   │   └── Hero.jsx              # Hero section
│   ├── App.jsx                   # Main application component
│   └── main.jsx                  # Application entry point
├── public/                       # Static assets
├── package.json                  # Project dependencies
└── README.md                     # Project documentation
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Tech Stack

### Frontend Framework
- **React 19.1.1** - Modern React with latest features and hooks

### State Management
- **Redux Toolkit 2.9.0** - Simplified Redux with modern best practices
- **React Redux 9.2.0** - Official React bindings for Redux

### Routing & Navigation
- **React Router DOM 7.9.0** - Declarative routing for React applications

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Icons 5.5.0** - Beautiful icons for React components

### Build Tool
- **Vite 7.1.2** - Fast build tool and development server

## 📱 Features Overview

### Product Management
- **Dynamic Product Grid** - Responsive grid layout showcasing products
- **Product Details** - Title, description, price, and high-quality images
- **Wishlist Ready** - Heart icon for future wishlist functionality

### Cart Functionality
- **Add to Cart** - One-click addition of products to cart
- **Quantity Control** - Increment and decrement item quantities
- **Item Removal** - Delete individual items from cart
- **Empty State** - User-friendly empty cart message with shopping link

### User Experience
- **Responsive Design** - Works seamlessly across all device sizes
- **Loading States** - Smooth transitions and hover effects
- **Accessibility** - ARIA labels and keyboard navigation support

## 🎯 Key Components

### Cart State Management
```javascript
// Cart slice provides comprehensive cart functionality
- addToCart: Add items with automatic quantity handling
- deleteCartItem: Remove specific items from cart
- IncrementQuantity: Increase item quantity
- DecrementQuantity: Decrease item quantity (minimum: 1)
- cartTotal: Calculate total price and quantity
```

### Product Data Structure
```javascript
{
  id: 1,
  title: "Product Name",
  image: "product-image-url",
  description: "Product description",
  price: 2499,
  quantity: 1
}
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Redux Toolkit Team** - For simplifying state management
- **Tailwind CSS Team** - For the utility-first CSS framework
- **Vite Team** - For the blazing-fast build tool

---

**Made with ❤️ using React & Redux Toolkit**

For questions or support, please open an issue in the repository.

# Screenshot
<img width="1891" height="881" alt="Image" src="https://github.com/user-attachments/assets/81d24d68-d241-4814-bc1f-2a0a50971a11" />
<img width="1896" height="890" alt="Image" src="https://github.com/user-attachments/assets/6bba739f-cfa6-4095-9087-300828774141" />
<img width="1898" height="813" alt="Image" src="https://github.com/user-attachments/assets/334f2bf7-49a5-4ec8-b782-4f61a871553d" />
<img width="1843" height="891" alt="Image" src="https://github.com/user-attachments/assets/7b95d3dc-f11c-4365-9fc7-17027c6ffb38" />

