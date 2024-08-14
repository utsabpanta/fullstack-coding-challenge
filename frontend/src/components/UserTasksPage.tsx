import React from 'react';

const UserTasksPage: React.FC = () => {
  const userId = 'b7ca0fd2-9a9b-4808-9ccc-281812ae2db4'; // dynamo table should have this userid

  /* Task#1: Add code to get list of tasks from backend /api/users/:userId/tasks and remove mock data
   * Task # 2:
   * Navigation:
   * - When the user clicks on "Create New Task," they should be redirected to the route: `create-task/users/:userId`.
   *
   * Form Fields:
   * - Title: Text input field for the task title.
   * - Description: Text input field for the task description.
   * - Due Date: Date picker input for selecting the task's due date.
   * - Status: Dropdown menu with the following options:
   *   - In Progress
   *   - Pending
   *   - Completed
   * Upon form submission, user should be redirected to the main page, and the newly created task
   * should be visible in the task list
   * Task # 3/ Stretch: Implement delete task
   */

  // ToDO - this is just a mock data for demo.
  const tasks = [
    {
      id: 'af3abc75-05da-418a-97e8-7da43637697a',
      userId: 'b7ca0fd2-9a9b-4808-9ccc-281812ae2db4',
      title: 'Complete API design',
      description: 'Need to wrap up the API design before deadline',
      status: 'pending',
      dueDate: '2024-09-13T20:06:46.399Z',
    },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <p>
        Hello, dev! Update code here so it uses API to fetch data instead of
        using mock data. Your userId is {userId}
      </p>
      <h2>Tasks</h2>
      <button type="submit">Create New Task</button>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Task ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.userId}</td>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{task.dueDate.toLocaleString()}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTasksPage;
