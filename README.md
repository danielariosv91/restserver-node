# Simple REST Server with Node.js and Express

This is a simple REST (Representational State Transfer) server template built with Node.js and Express. The project structure is organized into `controllers`, `models`, and `routes` directories to facilitate modular and maintainable development. This template serves as a foundation for creating RESTful APIs and can be easily extended for your specific use cases.

## Features

- Structured project layout with separate directories for controllers, models, and routes.
- Easily expandable to add new routes, controllers, and models.
- Integration with Express to create RESTful endpoints.
- A starting point for building RESTful APIs.

## Prerequisites

Before you get started, make sure you have the following:

- Node.js: Ensure you have Node.js installed on your local machine. You can download it from the official website: [Node.js](https://nodejs.org/).

## Project Structure

The project structure is organized as follows:

```
simple-rest-server/
│
├── controllers/          # Controllers for handling HTTP requests and responses
│   ├── sampleController.js  # Example controller
│   └── ...
├── models/               # Data models and database interactions
│   ├── sampleModel.js    # Example model
│   └── ...
├── routes/               # API routes and endpoints
│   ├── sampleRoutes.js   # Example route
│   └── ...
├── app.js                # The main application file
├── package.json          # NPM package configuration
├── .gitignore            # Git ignore configuration
└── README.md             # This README file
```

## Installation

1. Clone or download the Simple REST Server repository from GitHub:

   ```bash
   git clone git@github.com:danielariosv91/restserver-node.git
   ```

2. Navigate to the project directory:

   ```bash
   cd restserver-node
   ```

3. Install the required npm packages:

   ```bash
   npm installx
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Customize the application by adding new routes, controllers, and models as needed.

3. Create new controllers in the `controllers` directory, define your routes in the `routes` directory, and interact with data models in the `models` directory.

4. Add your business logic, data validation, and database interactions to the respective files.
