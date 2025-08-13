This is a React-based frontend for a secure login REST API, implementing JWT authentication, protected routes, and role-based access control.
It is designed to work with a backend API that supports OAuth 2.0/JWT authentication.
Features
JWT Authentication with access tokens stored in localStorage
Protected Routes using React Router
Authentication State Management with Context API
Axios Interceptors for automatic token injection
Minimal UI with Tailwind CSS
Login, Logout, and Auth Persistence
Redirect to /login if user is not authenticated

git clone https://github.com/your-username/secure-login-react.git
cd secure-login-react
npx tailwindcss init
const API_BASE_URL = "http://localhost:5000"; // Your backend URL
