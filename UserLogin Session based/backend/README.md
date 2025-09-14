# Backend API (PHP & Sessions)

This directory contains the backend API for the user login system. It is built with PHP and uses a stateful, session-based authentication system.

## Technology Stack

*   **PHP**: The core language for the API.

## How to Run

**Prerequisites**: PHP must be installed.

1.  **Start the server**:
    From within this `backend` directory, use PHP's built-in web server to run the API.
    ```bash
    php -S localhost:8000
    ```
    The API will now be available at `http://localhost:8000`.

## Authentication

This API is stateful. Authentication is handled via PHP sessions. The frontend must send requests with the `withCredentials: true` option to ensure the session cookie is sent and received correctly.

### Important Note on Browser Security

This project may not work out-of-the-box on all modern browsers due to strict security policies regarding cross-origin cookies (`SameSite` attribute). The code sets `SameSite=None` and `secure=true`, which means for the session to work reliably in production, **the backend must be served over HTTPS**.

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

Authenticates a user and starts a session.

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
        "success": true
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

A protected endpoint that retrieves user data based on the active session.

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
        "loggedIn": false
    }
    ```

### `GET /logout.php`

Destroys the current user session.

*   **Success Response (`200 OK`)**:
    ```json
    {
        "success": true
    }
    ```
