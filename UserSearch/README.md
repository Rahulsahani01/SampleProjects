# User Search Application

A simple web application that allows searching and paginating through a list of users.

## Tech Stack

- **Frontend:** React
- **Backend:** PHP

## Features

- Search users by name
- Pagination

## Getting Started

### Prerequisites

- Node.js and npm (or yarn)
- PHP

### Backend Setup

1.  Start a PHP server in the `backend` directory. You can use the built-in PHP server:
    ```bash
    cd backend
    php -S localhost:8000
    ```

### Frontend Setup

1.  Install the dependencies:
    ```bash
    cd frontend
    npm install
    ```
2.  Start the React development server:
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Folder Structure

```
.
├── backend
│   ├── users.json
│   └── users.php
└── frontend
    ├── package.json
    ├── public
    │   └── index.html
    └── src
        ├── App.css
        ├── App.js
        ├── index.css
        ├── index.js
        └── UsersTable.js
```
