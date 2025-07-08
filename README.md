# Welcome to REST-Api 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)

# Spots REST API

A simple REST API built with Node.js and Express for managing "spots" - location-based data with basic CRUD operations.

## Features

- **Full CRUD Operations**: Create, Read, Update, and Delete spots
- **Input Validation**: Uses Joi for request validation
- **Error Handling**: Comprehensive error handling for server and application errors
- **RESTful Design**: Follows REST conventions for API endpoints
- **JSON Support**: Built-in JSON parsing for request/response handling

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Fast, unopinionated web framework
- **Joi**: Object schema description language and validator

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install express joi
   ```
3. Run the application:
   ```bash
   node index.js
   ```

The server will start on port 3000 by default (or use the PORT environment variable).

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints

#### **GET /** 
- **Description**: Welcome message
- **Response**: `"Hello World"`

#### **GET /api/spots**
- **Description**: Retrieve all spots
- **Response**: Array of spot objects
- **Example Response**:
  ```json
  [
    { "id": 1, "name": "SkalizerSpot" },
    { "id": 2, "name": "PotsdammerSpot" },
    { "id": 3, "name": "OsloerSpot" }
  ]
  ```

#### **GET /api/spots/:id**
- **Description**: Retrieve a specific spot by ID
- **Parameters**: `id` (integer) - Spot ID
- **Response**: Spot object or 404 error
- **Example**: `GET /api/spots/1`

#### **GET /api/spots/:year/:month**
- **Description**: Demo endpoint showing parameter and query handling
- **Parameters**: `year`, `month` - Path parameters
- **Response**: Object containing params and query data
- **Example**: `GET /api/spots/2024/01?filter=active`

#### **POST /api/spots**
- **Description**: Create a new spot
- **Request Body**:
  ```json
  {
    "name": "NewSpotName"
  }
  ```
- **Validation**: Name must be at least 3 characters long
- **Response**: Created spot object with auto-generated ID

#### **PUT /api/spots/:id**
- **Description**: Update an existing spot
- **Parameters**: `id` (integer) - Spot ID
- **Request Body**:
  ```json
  {
    "name": "UpdatedSpotName"
  }
  ```
- **Validation**: Name must be at least 3 characters long
- **Response**: Updated spot object or 404 error

#### **DELETE /api/spots/:id**
- **Description**: Delete a spot
- **Parameters**: `id` (integer) - Spot ID
- **Response**: Deleted spot object or 404 error

## Data Structure

Each spot has the following structure:
```json
{
  "id": 1,
  "name": "SpotName"
}
```

## Validation Rules

- **Name**: Must be a string with minimum 3 characters (required)

## Error Responses

- **400 Bad Request**: Invalid input data (validation errors)
- **404 Not Found**: Spot with specified ID not found

## Sample Usage

### Create a new spot
```bash
curl -X POST http://localhost:3000/api/spots \
  -H "Content-Type: application/json" \
  -d '{"name": "MyNewSpot"}'
```

### Get all spots
```bash
curl http://localhost:3000/api/spots
```

### Update a spot
```bash
curl -X PUT http://localhost:3000/api/spots/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "UpdatedSpotName"}'
```

### Delete a spot
```bash
curl -X DELETE http://localhost:3000/api/spots/1
```

## Development

The API currently uses in-memory storage (array), so data will be lost when the server restarts. For production use, consider integrating with a database.

## Error Handling

The application includes:
- Server-level error handling for port binding issues
- Uncaught exception handling
- Request validation with descriptive error messages
- 404 handling for non-existent resources

## Environment Variables

- `PORT`: Server port (defaults to 3000)

## Default Data

The API comes with three pre-loaded spots:
- SkalizerSpot (ID: 1)
- PotsdammerSpot (ID: 2)  
- OsloerSpot (ID: 3)
