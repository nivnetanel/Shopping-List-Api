# TypeScript Server for Shopping List Application

## Overview

This TypeScript-based server is an integral part of the shopping list application, designed to showcase modern backend development practices.

## Key Features

- **TypeScript Integration**: Leverages TypeScript for strong typing and improved code maintainability.
- **RESTful API Endpoints**: Provides a suite of endpoints for managing shopping list operations, including add, delete, and retrieve functions.
- **Real-Time Data Handling**: Ensures efficient real-time processing of data requests and updates.

## Technologies and Tools

- **Node.js & Express.js**: Utilizes Node.js and Express.js framework for building efficient web APIs.
- **TypeScript**: Enhances JavaScript with type safety for better development experience.
- **MongoDB & Mongoose**: Employs MongoDB as the database with Mongoose for object data modeling.
- **ESLint & Prettier**: Ensures code quality and styling consistency.
- **dotenv**: Manages environment variables for secure configuration.

## Project Structure

- **`/models`**: TypeScript models defining the structure of the database entities.
- **`/routes`**: Express routes to handle API endpoint logic.
- **`/controllers`**: Business logic associated with each route.
- **`/utils`**: Utility functions and common middleware.
- **`server.ts`**: The main entry point for the server application.

## Monitoring
Using monitoring tools such as:
- **Cloudflare wrangler**: for monitoring onrender.com server health\
![image](https://github.com/nivnetanel/Shopping-List-Api/assets/97378548/0fbae130-3979-4931-a694-fecb4c83e4f9)

- **Nodemailer**: for monitoring user behavior when adding and removing products\
![image](https://github.com/nivnetanel/Shopping-List-Api/assets/97378548/cc704f2f-e08c-4335-8dd7-902c9f06be6b)

## Installation and Setup

Make sure Node.js is installed and then follow these instructions:

```bash
git clone 
cd your-server-folder
yarn
yarn dev
```

## Configuration


Set up your environment variables in a .env file:

```bash
PORT=5000
DB_CONNECTION_STRING=your_mongodb_connection_string
```

## API Endpoints

The server provides several RESTful endpoints for managing the shopping list. Below is a description of each endpoint and its functionality:

- **GET `/api/products`**
  - **Description**: Retrieves a list of all products.
  - **Response**: An array of products.

- **POST `/api/products`**
  - **Description**: Adds a new product to the list.
  - **Request Body**:
    ```json
    {
      "name": "Product Name",
      "quantity": 1,
      "categoryId": 1
    }
    ```
  - **Response**: The added product object.

- **DELETE `/api/products/:id`**
  - **Description**: Deletes a product by its ID.
  - **URL Parameters**: `id` is the unique identifier of the product.
  - **Response**: A success message or error information.

- **GET `/api/categories`**
  - **Description**: Retrieves all categories.
  - **Response**: An array of categories, each with its own ID and name.

