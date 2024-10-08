export interface Task {
  PK: string; // Partition key, structured as `USER#UUID`
  SK: string; // Sort key, structured as `TASK#UUID`
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string; // Due date of the task in ISO 8601 format (UTC)
  userId: string; // Extracted user UUID
  id: string; // task UUID - generated by API
}
