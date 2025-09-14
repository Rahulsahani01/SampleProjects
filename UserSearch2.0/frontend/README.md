# Frontend - React User Search App

React application for searching and browsing users with pagination.

## Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. The app will be accessible at: `http://localhost:3000`

## Environment Variables

Create a `.env` file in the frontend directory to configure the API URL:

```
REACT_APP_API_URL=http://localhost:8000
```

If not set, it defaults to `http://localhost:8000`.

## Features

- **Search**: Real-time search by user name (case-insensitive)
- **Pagination**: Navigate through pages of results (10 users per page)
- **Responsive Design**: Clean, mobile-friendly interface
- **Error Handling**: Displays error messages for failed API calls
- **Loading States**: Shows loading indicator during API requests

## Components

- `SearchBar.js`: Input field for search functionality
- `UserTable.js`: Table display for user data
- `Pagination.js`: Navigation controls for pages
- `App.js`: Main component integrating all features

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner