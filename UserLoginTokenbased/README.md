# User Login System (React + PHP + JWT)

This project is a simple user login system with a React frontend and a PHP backend. It uses JSON Web Tokens (JWT) for stateless authentication.

## Features

*   User registration (Signup)
*   User login
*   Stateless authentication using JWT
*   A protected dashboard route that is only accessible with a valid token
*   Password hashing using modern PHP standards

## Technology Stack

*   **Frontend**: React
*   **Backend**: PHP
*   **Authentication**: JSON Web Tokens (JWT)

## How It Works

This project uses a token-based authentication flow:

1.  A user signs up or logs in.
2.  The PHP backend verifies the credentials and generates a secure, signed JWT that contains the user's information and an expiration time (currently 1 hour).
3.  The token is sent to the React frontend.
4.  The frontend stores this token in the browser's `localStorage`.
5.  For any request to a protected route (like the dashboard), the frontend sends the token in the `Authorization` header.
6.  The backend verifies the token's signature and expiration. If valid, it grants access.
7.  Logging out simply involves deleting the token from `localStorage` on the frontend.

This approach is **stateless**, meaning the server does not need to store any session information.

## How to Run

### Backend Setup

**Prerequisites**: PHP and Composer must be installed.

1.  **Navigate to the `backend` directory**:
    ```bash
    cd backend
    ```
2.  **Install PHP dependencies**:
    ```bash
    # This will install the firebase/php-jwt library
    composer install
    ```
3.  **Start the PHP server**:
    ```bash
    php -S localhost:8000
    ```
    The backend API will now be running at `http://localhost:8000`.

### Frontend Setup

**Prerequisites**: Node.js and npm must be installed.

1.  **Navigate to the `frontend` directory**:
    ```bash
    cd frontend
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm start
    ```
    The React application will open in your browser at `http://localhost:3000`.

## API Endpoints

*   `POST /login.php`: Authenticates a user and returns a JWT.
*   `POST /signup.php`: Registers a new user.
*   `GET /dashboard.php`: A protected endpoint that returns user data if a valid JWT is provided.
