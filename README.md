# Fullstack-coding-challenge
This project uses npm workspace and Docker to package and run the frontend, backend, and DynamoDB together, providing a consistent and easy-to-setup development environment.

This project is a simple Task Management Application that allows users to efficiently organize and track their tasks.

## Prerequisites

- Node.js (v20).
- npm (v10 or later for workspaces support).
- Please make sure you have docker installed in your machine.

If you don't have node.js v20 installed, just run `nvm i`

## Development

This project uses [dynamo-local-admin-docker](https://github.com/instructure/dynamo-local-admin-docker) for running DynamoDB locally.

To start development:

1. Run `npm run install:all` to install dependencies for all workspaces
2. Run `npm run start:dynamo` to start the Dynamo
3. In another terminal, run `npm run setAppData` to seed sample data to the Dynamodb.
4. Run `npm run start:apps` to start all services.
5. Access the frontend at `http://localhost:4000`.
6. The backend API will be available at `http://localhost:5001/api/`
   - The endpoints have been stubbed to return "implement this"
   - Try `http://localhost:5001/api/users/123/tasks` 
7. DynamoDB local instance will be running and accessible to the application.
   You can access DynamoDB UI view in `http://localhost:8000/`
8. HMR/hot reloading is enabled for both frotnend and backend.

## Troubleshooting Tips
 - In case you run into any docker related issue, try running
    ```
    docker-compose down
    docker-compose build --no-cache
    docker-compose up
    ```

### Frontend-specific scripts

- `npm run lint:frontend`: Lint frontend code
- `npm run format:frontend`: Format frontend code
- `npm i {PACKAGE_NAME} --workspace=frontend`: Install any dependency to frontend project

### Backend-specific scripts

- `npm run lint:backend`: Lint backend code
- `npm run format:backend`: Format backend code
- `npm i {PACKAGE_NAME} --workspace=backend`: Install any dependency to backend project
