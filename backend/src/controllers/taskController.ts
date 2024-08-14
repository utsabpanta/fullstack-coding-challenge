import { Request, Response } from 'express';
import { dynamoDb } from '../dynamo/dynamoClient';
import { v4 as uuidv4 } from 'uuid';

const TABLE_NAME = 'Tasks';

// Please see models/task.ts for model details

/**
 * Implement this!
 * Fetches all tasks for a specific user from the DynamoDB table.
 *
 * This function performs a query operation on the DynamoDB table to retrieve all tasks
 * associated with a particular user, identified by their `userId`.
 *
 * The `userId` is expected to be provided as a URL parameter in the route.
 * **Route:** `GET /users/:userId/tasks`
 *
 * Response Scenarios:
 * 1. Success (200 OK):
 *    - If tasks are found: Returns an array of task objects
 *    - If no tasks are found: Returns an empty array
 *
 * 2. Error (500 Internal Server Error):
 *    - If an error occurs during the operation
 *
 * @example
 * // Success response with tasks
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "id": "af3abc75-05da-418a-97e8-7da43637697a",
 *     "title": "Complete project",
 *     "status": "in-progress",
 *     "description": "Important project",
 *     "dueDate": "2024-08-13T20:06:46.399Z",
 *     "userId": "b7ca0fd2-9a9b-4808-9ccc-281812ae2db4"
 *   }
 * ]
 */

export const getTasksByUser = async (req: Request, res: Response) => {
  res.status(200).json('Implement this');
};

/** Implement this!
 * Creates a new task for a specific user in the DynamoDB table.
 *
 * This function validates the required fields (`userId`, `title`, `description`, `status`, `dueDate`)
 * from the request body. If any required field is missing, it returns a 400 error with a descriptive message.
 * If all required fields are present, it generates a unique `id`, constructs the task object, and
 * inserts it into the DynamoDB table. Upon successful creation, it returns a 201 status with the `id`.
 *
 * **Route:** `POST /tasks`
 */
export const createTask = async (req: Request, res: Response) => {
  res.status(201).json('Implement this');
};

/** Strecth! implement this
 * Deletes a specific task for a user from the DynamoDB table.
 *
 * This function deletes a task identified by the `userId` and task `id` from the DynamoDB table.
 *
 * The `userId` and `taskId` are expected to be provided as URL parameters in the route.
 * The route format should be `/users/:userId/tasks/:taskId`.
 * **Route:** `DELETE /users/:userId/tasks/:taskId`
 *
 * Upon successful deletion, a 200 status is returned with a confirmation message.
 * If there is an error during the deletion operation, a 500 error is returned.
 *
 */
export const deleteTask = async (req: Request, res: Response) => {
  res.status(200).json('Implement this');
};
