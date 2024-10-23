# Events Management Frontend

This is the frontend application for managing events, built with React, TypeScript, Tailwind CSS, and React Router. It allows users to create, update, view, and filter events based on different criteria.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Pending Improvements](#pending-improvements)

## Technologies Used

The project uses the following technologies:

- **React**: For building user interfaces (CRA).
- **TypeScript**: For static type-checking.
- **Tailwind CSS**: For styling and responsive design.
- **React Router**: For routing.
- **Axios**: For handling HTTP requests.
- **React Hook Form**: For form management.
- **date-fns**: For date formatting and manipulation.
- **React Hot Toast**: For notifications.
- **Atomic Design**: For better organization of components

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/welladam/events-management-frontend.git
   ```
2. Navigate to the project directory:
   ```
   cd events-management-frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
   Or, if you're using Yarn:
   ```
   yarn install
   ```

## Environment Variables

This project uses environment variables to manage configuration settings. Create a `.env` file in the root of the project with the following variables:

```
REACT_APP_API_URL=http://localhost:8080/api
```

Replace `http://localhost:8080/api` with the actual backend URL.

### How to use `.env` variables in the code

To access the environment variables, use:

```
const apiUrl = process.env.REACT_APP_API_URL;
```

Ensure that the variables have the prefix **`REACT_APP_`**, as this is required by Create React App to expose environment variables.

## Running the Project

To start the development server, run:

```
npm start
```

Or, with Yarn:

```
yarn start
```

The application will be accessible at `http://localhost:3000`.

## Project Structure

The main folders and files are organized as follows:

```
src/
│
├── api/                # API calls and Axios setup
├── components/         # Reusable components
│   ├── atoms/          # Atomic components (buttons, inputs, etc.)
│   ├── molecules/      # Complex components made up of atoms (e.g., forms)
│   └── organisms/      # Full sections like header, footer, etc.
│   └── templates/      # Complex sections like FormData.
│
├── helpers/            # Custom functions to help.
├── pages/              # Page components for routing
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and constants
└── App.tsx             # Main application component
```

## Pending Improvements

Here are some potential improvements that can be made to the project:

1. **Improve Error Handling**: Add more descriptive error messages, especially during form submission.
2. **Pagination for Events List**: Implement pagination to handle a large number of events.
3. **Form Validation**: Enhance form validation using `Yup` for schema-based validations.
4. **Loading States**: Add skeleton loaders to more sections of the app (e.g., form submission).
5. **Add Unit Tests**: Implement unit tests using tools like Jest and React Testing Library to improve code reliability.
6. **Docker**: Add the possibility of running the project with Docker.
