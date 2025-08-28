# E-Voting System Backend

This is the backend for the E-Voting System, built using Node.js and Express. The application provides a RESTful API for managing voting processes, including user registration, casting votes, and retrieving election results.

## Project Structure

```
e-voting-backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains business logic for routes
│   │   └── index.js
│   ├── routes                # Defines API endpoints
│   │   └── index.js
│   ├── models                # Data models for the application
│   │   └── index.js
│   └── middleware            # Middleware functions for request handling
│       └── index.js
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd e-voting-backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## API Endpoints

- **GET /api/votes**: Retrieve all votes.
- **POST /api/votes**: Create a new vote.
- **GET /api/results**: Retrieve election results.

## Usage Examples

### Create a Vote

```bash
curl -X POST http://localhost:3000/api/votes -H "Content-Type: application/json" -d '{"userId": "123", "electionId": "456", "choice": "A"}'
```

### Get Results

```bash
curl -X GET http://localhost:3000/api/results
```

## License

This project is licensed under the MIT License.