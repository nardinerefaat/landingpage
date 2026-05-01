# KingTech E-Commerce Landing Page

A modern, responsive e-commerce landing page built with React 19, featuring a comprehensive product catalog, shopping cart functionality, and seamless user experience. This application demonstrates advanced React architecture with state management, theming, and component-based design.

## Project Description

KingTech is a scalable e-commerce platform that showcases a technology-focused product catalog with multiple categories including phones, laptops, audio/visual equipment, tablets, and storage components. The application provides a complete shopping experience with product browsing, search functionality, cart management, and persistent data storage using localStorage.

Built with performance and maintainability in mind, this project serves as an excellent example of modern React development practices including Context API for state management, custom hooks for data persistence, and SCSS modules for styling.

## Features

### Core Functionality
- **Product Catalog**: Multi-category product display with laptops, phones, audio/visuals, tablets, and storage components
- **Shopping Cart**: Full cart functionality with add/remove items, quantity management, and persistent storage
- **Search & Filter**: Real-time product search across title, brand, and description fields
- **Category Navigation**: Organized product browsing by category with dynamic filtering
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience
- **Dark Mode Toggle**: Theme switching with persistent user preference
- **Smooth Scrolling**: Navigation with animated scroll between sections
- **Loading States**: User-friendly loading indicators for async operations
- **Cart Counter**: Real-time cart item count displayed in navigation
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

### Technical Features
- **Context API**: Global state management for cart and theme
- **Custom Hooks**: Reusable localStorage hooks for data persistence
- **Component Architecture**: Modular, reusable component design
- **Data Fetching**: Concurrent API calls with error handling
- **Performance Optimized**: Efficient re-rendering and state updates

## Tech Stack

### Frontend Framework
- **React 19.2.4**: Latest React version with modern hooks and features
- **React DOM 19.2.4**: DOM rendering for React components

### Routing & Navigation
- **React Router 7.14.0**: Client-side routing and navigation
- **React Scroll 1.9.3**: Smooth scrolling between page sections

### Styling & UI
- **Sass 1.97.3**: CSS preprocessor for advanced styling
- **SCSS Modules**: Component-scoped styling for better maintainability
- **React Icons 5.5.0**: Comprehensive icon library

### State Management
- **React Context API**: Global state management for cart and theme
- **Custom Hooks**: useLocalStorage for persistent data storage

### Development Tools
- **React Scripts 5.0.1**: Build tool and development server
- **Web Vitals 2.1.4**: Performance monitoring and metrics

### Testing Framework
- **Jest**: JavaScript testing framework
- **React Testing Library 16.3.2**: Component testing utilities
- **Testing Library User Event 14.6.1**: User interaction simulation
- **Testing Library DOM 10.4.1**: DOM testing utilities

### Data Sources
- **DummyJSON API**: External API for laptop products
- **Local JSON Files**: Static data for mobile, audio, tablets, and storage products

## Installation Steps

### Prerequisites
- Node.js 16.0 or higher
- npm 7.0 or higher (or yarn 1.22.0+)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landingpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner in interactive watch mode
- `npm run eject`: Ejects from Create React App (one-way operation)

## Usage

### Navigation
- **Main Navigation**: Use the navbar to navigate between Home, Products, Categories, and Features sections
- **Smooth Scrolling**: Click navigation links for smooth scroll to target sections
- **Mobile Menu**: Use the hamburger menu on mobile devices

### Product Browsing
- **Featured Products**: Browse highlighted products on the main page
- **Search Products**: Use the search bar to filter products by name, brand, or description
- **View All/Show Less**: Toggle between showing 5 or all products
- **Product Details**: Click "Description" to view full product information

### Category Shopping
- **Category Selection**: Choose from Phone, Laptops, Audio/Visuals, Tablets, or Storage categories
- **Dynamic Filtering**: Products update automatically based on selected category
- **Category Indicators**: See item count for each category

### Shopping Cart
- **Add to Cart**: Click "Add To Cart" with desired quantity
- **Quantity Controls**: Use + and - buttons to adjust item quantities
- **Remove Items**: Click "delete item" to remove products from cart
- **Cart Counter**: See total items in cart from navigation
- **Cart Page**: View detailed cart with individual item totals and grand total

### Theme Customization
- **Dark Mode**: Toggle between light and dark themes using the theme button
- **Persistent Theme**: Theme preference is saved and restored on revisits

## Folder Structure

```
landingpage/
├── public/                          # Static assets
│   ├── index.html                   # Main HTML template
│   ├── manifest.json                # PWA configuration
│   ├── mobileData.json              # Mobile products data
│   ├── audioandvisuals.json         # Audio/Visual products data
│   ├── tablets.json                 # Tablet products data
│   ├── storage.json                 # Storage products data
│   └── favicon.ico                  # Site favicon
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── features.jsx             # Featured products section
│   │   ├── footer.jsx               # Page footer
│   │   ├── home.jsx                 # Hero section
│   │   ├── navbar.jsx               # Navigation bar
│   │   ├── navbarCart.jsx           # Cart navigation component
│   │   ├── productcategory.jsx      # Product category section
│   │   └── testimonials.jsx         # Testimonials section
│   ├── context/                      # React Context
│   │   └── DataContext.js           # Global state management
│   ├── hooks/                        # Custom React hooks
│   │   └── useLocalStorage.js       # localStorage persistence hook
│   ├── pages/                        # Page components
│   │   └── cart.jsx                  # Shopping cart page
│   ├── styles/                       # SCSS stylesheets
│   │   ├── features.module.scss     # Features component styles
│   │   ├── footer.module.scss       # Footer component styles
│   │   ├── home.module.scss         # Home component styles
│   │   ├── nav.module.scss          # Navigation styles
│   │   └── productCategory.module.scss # Category styles
│   ├── App.css                       # Global application styles
│   ├── App.js                        # Main application component
│   ├── index.css                     # Base styles
│   └── index.js                      # Application entry point
├── package.json                      # Dependencies and scripts
└── README-Final.md                   # This documentation file
```

## Future Improvements

### Planned Features
- **User Authentication**: Login/logout functionality with user profiles
- **Payment Integration**: Stripe or PayPal integration for checkout process
- **Product Reviews**: User rating and review system for products
- **Wishlist Feature**: Save favorite products for later purchase
- **Product Comparison**: Compare multiple products side-by-side
- **Advanced Filtering**: Price range, brand, and specification filters

### Technical Enhancements
- **TypeScript Migration**: Add type safety throughout the application
- **Performance Optimization**: Implement code splitting and lazy loading
- **PWA Features**: Offline functionality and installable app experience
- **SEO Optimization**: Meta tags, structured data, and server-side rendering
- **Analytics Integration**: Google Analytics for user behavior tracking
- **Error Boundary Enhancement**: More granular error handling and reporting

### Backend Development
- **API Development**: RESTful API for product and order management
- **Database Integration**: MongoDB or PostgreSQL for data persistence
- **Admin Dashboard**: Content management system for product updates
- **Order Management**: Backend system for processing and tracking orders
- **Inventory Management**: Real-time stock tracking and updates

### User Experience Improvements
- **Loading Skeletons**: Better loading states with skeleton screens
- **Infinite Scroll**: Pagination for large product catalogs
- **Quick View**: Modal for quick product preview without page navigation
- **Image Gallery**: Multiple product images with zoom functionality
- **Recently Viewed**: Track and display recently browsed products
- **Recommendations Engine**: AI-powered product suggestions

### Accessibility & Internationalization
- **Accessibility Audit**: WCAG 2.1 compliance improvements
- **Screen Reader Support**: Enhanced ARIA labels and descriptions
- **Keyboard Navigation**: Full keyboard accessibility for all features
- **Multi-language Support**: Internationalization with react-i18next
- **Currency Localization**: Support for multiple currencies and regions

### Testing & Quality Assurance
- **Unit Test Coverage**: Increase test coverage to 90%+
- **Integration Testing**: End-to-end testing with Cypress
- **Visual Regression Testing**: Automated UI consistency checks
- **Performance Testing**: Load testing and performance monitoring
- **Security Auditing**: Regular security scans and vulnerability assessments

---

## Development Notes

This project demonstrates modern React development best practices including component-based architecture, state management with Context API, custom hooks for reusable logic, and responsive design principles. The codebase is structured for maintainability and scalability, making it an excellent foundation for larger e-commerce applications.

For questions or contributions, please refer to the project repository or contact the development team.
