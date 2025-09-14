# Backend API (PHP & JWT)

This directory contains the backend API for the user login system. It is built with PHP and uses JSON Web Tokens (JWT) for stateless authentication.

## Technology Stack

*   **PHP**: The core language for the API.
*   **Composer**: For managing PHP dependencies.
*   **firebase/php-jwt**: The library used to create and validate JSON Web Tokens.

## How to Run

**Prerequisites**: PHP and Composer must be installed.

1.  **Install dependencies**:
    From within this `backend` directory, run Composer to install the required libraries.
    ```bash
    composer install
    ```

2.  **Start the server**:
    Use PHP's built-in web server to run the API.
    ```bash
    php -S localhost:8000
    ```
    The API will now be available at `http://localhost:8000`.

## Authentication

This API is stateless. Authentication is handled by passing a JWT in the `Authorization` header of your requests using the `Bearer` schema.

`Authorization: Bearer <your_jwt_here>`

## API Endpoints

### `POST /signup.php`

Registers a new user.

*   **Request Body**:
    ```json
    {
        "email": "newuser@example.com",
        "password": "a_strong_password"
    }
    ```
*   **Success Response (`200 OK`)**:
    ```json
    {
        "success": true,
        "message": "User registered successfully."
    }
    ```
*   **Error Response (`200 OK`)**:
    ```json
    {
        "success": false,
        "message": "User with this email already exists."
    }
    ```

### `POST /login.php`

Authenticates a user and provides a JWT.

*   **Request Body**:
    ```json
    {
        "email": "user@example.com",
        "password": "password"
    }
    ```
*   **Success Response (`200 OK`)**:
    ```json
    {
        "success": true,
        "token": "ey..."
    }
    ```
*   **Error Response (`200 OK`)**:
    ```json
    {
        "success": false,
        "message": "Invalid credentials"
    }
    ```

### `GET /dashboard.php`

A protected endpoint to retrieve user data.

*   **Headers**:
    *   `Authorization: Bearer <your_jwt_here>`
*   **Success Response (`200 OK`)**:
    ```json
    {
        "loggedIn": true,
        "user": "user@example.com"
    }
    ```
*   **Error Response (`401 Unauthorized`)**:
    ```json
    {
        "loggedIn": false,
        "message": "Access denied: ..."
    }
    ```
