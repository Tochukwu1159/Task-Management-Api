Task Management API

This is a simple task management REST API built using Node.js and Express.js. It allows you to create, read, update, and delete tasks.

Table of Contents
Requirements
Installation
Usage
API Endpoints
Middleware
Validation
Error Handling
Testing
Additional Instructions
Example Task Object
Evaluation Criteria
Requirements
Node.js
Express.js
File-based storage (JSON)
Installation
Clone the repository:

git clone <Tochukwu1159/Task-Management-Api.git>
Install dependencies:


cd assignment
yarn install
Usage
To start the server, run:


yarn run start
The server will start on port 4400 by default. You can access the API endpoints using tools like Postman or curl.

API Endpoints
GET /tasks: Retrieve all tasks.
POST /tasks: Create a new task.
GET /tasks/
: Retrieve a single task by its ID.
PUT /tasks/
: Update a task by its ID.
DELETE /tasks/
: Delete a task by its ID.
Middleware
The API includes a middleware function that logs the details of each request (method, URL, timestamp).

Validation
Input data for creating and updating tasks are validated to ensure that title and description are strings and completed is a boolean.

Error Handling
Errors, including validation errors and cases where a task is not found, are properly handled.

Testing
Tests can be added using testing frameworks like Mocha and Chai.

Additional Instructions
Detailed comments are included in the code to explain the logic.
Environment variables can be used for configuration (e.g., port number).
Example Task Object
json

{
  "id": 1,
  "title": "Sample Task",
  "description": "This is a sample task.",
  "completed": false,
  "created_at": "2024-01-01T00:00:00.000Z",
  "updated_at": "2024-01-01T00:00:00.000Z"
}

Evaluation Criteria
Correctness and completeness of the API implementation.
Code quality and organization.
Proper use of middleware and validation.
Error handling and response structure.
Documentation and ease of setup.
