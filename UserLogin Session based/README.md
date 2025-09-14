# User Login System (React + PHP + Sessions)

This project is a simple user login system with a React frontend and a PHP backend. It uses a traditional, stateful session-based authentication system.

## Features

*   User registration (Signup)
*   User login
*   Stateful authentication using PHP sessions
*   A protected dashboard route that is only accessible with an active session
*   Password hashing using modern PHP standards

## How It Works

This project uses a session-based authentication flow:

1.  A user signs up or logs in.
2.  The PHP backend verifies the credentials and starts a session, storing the user's ID on the server.
3.  The server sends a session cookie to the browser.
4.  For any subsequent request, the browser sends this cookie back to the server, which is used to identify the user and grant access.
5.  Logging out destroys the session data on the server.

For more detailed information on the API endpoints, see the [backend README](./backend/README.md).

## How to Run

You will need two separate terminals running at the same time.

### Terminal 1: Run the Backend

1.  **Navigate to the backend folder**:
    ```bash
    cd backend
    ```
2.  **Start the PHP server**:
    (Requires PHP to be installed)
    ```bash
    php -S localhost:8000
    ```

### Terminal 2: Run the Frontend

1.  **Navigate to the frontend folder**:
    ```bash
    cd frontend
    ```
2.  **Install dependencies**:
    (Requires Node.js and npm to be installed)
    ```bash
    npm install
    ```
3.  **Start the React app**:
    ```bash
    npm start
    ```
    This will open the application in your browser at `http://localhost:3000`.

## Important Note on Browser Security

This session-based approach is sensitive to modern browser security policies regarding cross-origin cookies. The code is configured to require **HTTPS** for the session cookie to work reliably in a production environment, and may not work in all local development browsers without specific configuration.
