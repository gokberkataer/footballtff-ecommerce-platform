# Football E-commerce Platform

A full-stack e-commerce web application built for football enthusiasts, featuring a modern React frontend with Django REST API backend. This project demonstrates comprehensive e-commerce functionality including user authentication, product management, shopping cart operations, and order processing.

## 🚀 Live Demo

**Frontend Demo:** [Available at localhost:3000 when running]

## 🛠️ Technologies Used

### Frontend
- **React 18.2.0** - Modern JavaScript library for building user interfaces
- **Redux 4.2.0** - State management for predictable application state
- **React Router 6.4.4** - Client-side routing for single-page applications
- **Bootstrap 5.2.3** - Responsive CSS framework for modern UI design
- **Axios 1.2.0** - HTTP client for API communication
- **React Bootstrap 2.6.0** - Bootstrap components built with React

### Backend
- **Python 3.x** - High-level programming language
- **Django 4.x** - High-level Python web framework
- **Django REST Framework** - Powerful toolkit for building Web APIs
- **SQLite** - Lightweight database for development
- **JWT Authentication** - Secure token-based authentication system

### Development Tools
- **Git** - Version control system
- **npm** - Package manager for JavaScript
- **Virtual Environment** - Python dependency isolation

## ✨ Key Features

### User Management
- User registration and authentication system
- JWT-based secure login/logout functionality
- User profile management
- Password protection and security

### Product Management
- Comprehensive product catalog with categories
- Product search and filtering capabilities
- Product reviews and rating system
- Image handling and storage
- Stock management and inventory tracking

### Shopping Experience
- Interactive shopping cart functionality
- Real-time cart updates and persistence
- Product quantity management
- Responsive product browsing interface

### Order Processing
- Complete checkout workflow
- Shipping address management
- Payment method integration
- Order history and tracking
- Order status management

### Admin Features
- Admin panel for content management
- Product CRUD operations
- Order management system
- User management capabilities

## 🏗️ Architecture

### Frontend Architecture
```
src/
├── components/     # Reusable UI components
├── page/          # Page-level components
├── actions/       # Redux actions
├── reducers/      # Redux state reducers
├── constants/     # Application constants
└── store.js       # Redux store configuration
```

### Backend Architecture
```
backend/
├── base/          # Main Django app
│   ├── models.py  # Database models
│   ├── views.py   # API views
│   ├── serializers.py # Data serialization
│   └── urls.py    # URL routing
├── backend/       # Django settings
└── manage.py      # Django management
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- Git

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## 📱 Features Overview

- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices
- **Modern UI/UX**: Clean, intuitive interface built with Bootstrap 5
- **State Management**: Centralized state management using Redux
- **API Integration**: RESTful API communication with Django backend
- **Security**: JWT authentication and secure data handling
- **Scalability**: Modular architecture for easy maintenance and scaling

## 🎯 Technical Highlights

- **Component-Based Architecture**: Reusable React components for maintainable code
- **RESTful API Design**: Clean API endpoints following REST principles
- **Database Design**: Well-structured Django models with proper relationships
- **Authentication System**: Secure JWT-based user authentication
- **Responsive Layout**: Bootstrap-powered responsive design
- **State Management**: Redux implementation for complex state handling

## 📊 Database Schema

The application uses Django ORM with the following main models:
- **User**: Authentication and user management
- **Product**: Product catalog with categories and reviews
- **Order**: Order management and processing
- **OrderItem**: Individual items within orders
- **ShippingAddress**: Delivery information management
- **Review**: Product reviews and ratings

## 🔧 Development Skills Demonstrated

- **Full-Stack Development**: Complete application from database to UI
- **API Development**: RESTful API design and implementation
- **Frontend Development**: Modern React with hooks and functional components
- **State Management**: Redux implementation for complex state
- **Database Design**: Django ORM and database modeling
- **Authentication**: JWT token-based security
- **Responsive Design**: Mobile-first responsive layouts
- **Version Control**: Git workflow and project management

## 📈 Project Impact

This project showcases:
- End-to-end e-commerce solution development
- Modern web development best practices
- Full-stack application architecture
- User experience design principles
- Database design and management
- API development and integration

## 🤝 Contributing

This is a portfolio project demonstrating full-stack development capabilities. For questions or feedback, please reach out through the contact information provided.

## 📄 License

This project is created for portfolio and demonstration purposes.

---

**Built with ❤️ using React, Django, and modern web technologies**
