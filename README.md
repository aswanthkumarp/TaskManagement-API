# Task Management API

This is a simple Task Management API built using Node.js, Express, and MongoDB. The API allows users to perform CRUD operations on tasks, along with features like authentication, pagination, sorting, and filtering.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Pagination, Sorting, and Filtering](#pagination-sorting-and-filtering)


## Features

- Create, Read, Update, and Delete (CRUD) operations for tasks.
- Secure endpoints with JWT token-based authentication.
- Pagination, sorting, and filtering for handling large datasets.
- Error handling middleware for better error responses.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-management-api.git


 ## API Endpoints

    POST /api/auth/register: Register a new user.
    POST /api/auth/login: Login and obtain a JWT token.
    GET /api/tasks: Get all tasks (with pagination, sorting, and filtering options).
    POST /api/tasks: Create a new task.
    GET /api/tasks/:taskId: Get a task by ID.
    PUT /api/tasks/:taskId: Update a task.
    DELETE /api/tasks/:taskId: Delete a task.

## Authentication

    To access protected routes (e.g., creating, updating, deleting tasks), include the JWT token in the Authorization header as a Bearer token.

## Pagination, Sorting, and Filtering

    Use query parameters (page, limit, sortBy, order, completed) to paginate, sort, and filter tasks when making requests to the /api/tasks endpoint.
