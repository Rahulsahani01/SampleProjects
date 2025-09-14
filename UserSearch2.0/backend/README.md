# Backend - PHP REST API

Simple PHP REST API for user search and pagination.

## Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Start the PHP development server:
   ```bash
   php -S localhost:8000
   ```

3. The API will be accessible at: `http://localhost:8000/index.php`

## API Endpoints

### GET /index.php

Returns paginated users with optional search functionality.

**Query Parameters:**
- `search` (optional): Search term to filter users by name (case-insensitive)
- `page` (optional): Page number (default: 1)

**Response Format:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "John Smith",
      "email": "john.smith@email.com"
    }
  ],
  "total": 100,
  "page": 1,
  "per_page": 10
}
```

## Examples

- Get all users (first page): `http://localhost:8000/index.php`
- Search for users: `http://localhost:8000/index.php?search=john`
- Get specific page: `http://localhost:8000/index.php?page=2`
- Search with pagination: `http://localhost:8000/index.php?search=smith&page=1`

## Files

- `index.php`: Main API endpoint
- `users.json`: Database file containing 100 dummy users