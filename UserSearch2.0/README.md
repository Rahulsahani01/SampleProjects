# User Search 2.0 - Full Stack Application

A full-stack user search application with React frontend and PHP backend, featuring real-time search and pagination.

## Tech Stack

- **Frontend**: React (functional components + hooks)
- **Backend**: PHP (REST API)
- **Data Storage**: JSON file (100 dummy users)

## Features

- Real-time user search by name (case-insensitive)
- Paginated results (10 users per page)
- Responsive design
- Error handling and loading states
- Clean, modern UI

## Project Structure

```
project-root/
├── backend/
│   ├── index.php           # REST API endpoint
│   ├── users.json          # 100 dummy users
│   └── README.md           # Backend setup
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.js
│   │   │   ├── UserTable.js
│   │   │   └── Pagination.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md           # Frontend setup
├── .gitignore
└── README.md               # This file
```

## Quick Start

### 1. Start the Backend

```bash
cd backend
php -S localhost:8000
```

Backend will be available at: `http://localhost:8000`

### 2. Start the Frontend

```bash
cd frontend
npm install
npm start
```

Frontend will be available at: `http://localhost:3000`

## API Usage

### Search Users
```
GET http://localhost:8000/index.php?search=john
```

### Get Specific Page
```
GET http://localhost:8000/index.php?page=2
```

### Search with Pagination
```
GET http://localhost:8000/index.php?search=smith&page=1
```

### Response Format
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

## Configuration

### Frontend Environment Variables

Create `frontend/.env`:
```
REACT_APP_API_URL=http://localhost:8000
```

## Development

- Backend uses PHP's built-in server for development
- Frontend uses Create React App development server
- CORS is enabled for cross-origin requests
- All components use functional components with hooks

## Production Deployment

### Backend
- Deploy PHP files to web server
- Ensure `users.json` is readable
- Configure proper CORS headers

### Frontend
```bash
cd frontend
npm run build
```
Deploy the `build/` directory to web server.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request