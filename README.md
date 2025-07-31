# Football E-commerce Platform

This project is a modern full-stack e-commerce web application I developed for football enthusiasts. It's designed as a comprehensive platform where users can browse and purchase football merchandise, manage their shopping cart, and complete secure transactions.

## Technologies Used

**Backend:** Python, Django, Django REST Framework, SQLite  
**Frontend:** React 18.2.0, Redux 4.2.0, React Router 6.4.4, Bootstrap 5.2.3  
**Authentication:** JWT (JSON Web Tokens)  
**Tools:** Axios, Virtual Environment, Git, npm

## Project Features

- User registration and authentication system
- Product catalog with search and filtering
- Interactive shopping cart functionality
- Secure checkout process
- Product reviews and ratings
- Responsive design (mobile-friendly)
- Admin panel for content management
- Real-time cart updates
- Order history and tracking

## 🚀 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/gokberkataer/footballtff-ecommerce-platform.git
cd footballtff-ecommerce-platform
```

2. **Set up the frontend:**
```bash
cd frontend
npm install
npm start
```

3. **Set up the backend (optional for demo):**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

4. **Open in browser:**
```
Frontend: http://localhost:3000
Backend: http://localhost:8000 (if running)
```

## 📁 Project Structure

```
├── frontend/         # React application
│   ├── src/          # Source code
│   │   ├── components/   # Reusable React components
│   │   ├── page/         # Page components
│   │   ├── actions/      # Redux actions
│   │   ├── reducers/     # Redux reducers
│   │   └── constants/    # Redux constants
│   └── public/       # Static files
├── backend/          # Django REST API
│   ├── base/         # Main app with models, views, serializers
│   ├── backend/      # Django settings and configuration
│   └── manage.py     # Django management script
└── README.md         # Project documentation
```

## Database Schema

The application uses Django ORM with the following main models:
- **User**: Authentication and user management
- **Product**: Product catalog with categories and reviews
- **Order**: Order management and processing
- **OrderItem**: Individual items within orders
- **ShippingAddress**: Delivery information management
- **Review**: Product reviews and ratings

## What I Learned

This project helped me develop skills in:
- Full-stack development with Django REST API and React
- Database design and management with Django ORM
- User authentication and security implementation
- State management using Redux
- RESTful API development
- Component-based React architecture
- Responsive web design with Bootstrap
- JWT token-based authentication
- E-commerce business logic and workflows

## Technical Highlights

- Implemented JWT authentication for secure user sessions
- Created modular React components for reusability
- Designed responsive UI that works on all devices
- Built complete e-commerce workflow from product browsing to checkout
- Used Redux for centralized state management
- Integrated frontend and backend through RESTful APIs

## Future Enhancements

The project architecture supports potential enhancements including:
- Payment gateway integration (Stripe, PayPal)
- Advanced search and filtering capabilities
- Admin dashboard improvements
- Mobile application development
- Analytics and reporting features

## Contact

For questions about this project: ataerbozdemir@gmail.com

---

**Built with ❤️ using React, Django, and modern web technologies**
