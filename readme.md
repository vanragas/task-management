# Task Management API

This is a Task Management API built with Node.js, Express, and MongoDB. The API allows users to create, read, update, and delete tasks, manage task priorities, statuses, due dates, and tags.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Task Status Management**: Set task status as Pending, In Progress, or Completed.
- **Priority Management**: Assign task priorities as Low, Medium, or High.
- **Due Dates**: Set and manage task due dates.
- **Tagging**: Add tags to tasks for easy categorization.

## API Endpoints

### Create a Task

- **URL:** `/api/tasks`
- **Method:** `POST`
- **Description:** Create a new task.
- **Request Body:**
  ```json
  {
    "title": "New Task",
    "description": "Task description",
    "status": "Pending",
    "priority": "Medium",
    "dueDate": "2024-09-01T00:00:00Z",
    "tags": ["work", "urgent"]
  }
  ```

### Get All Tasks

- **URL:** `/api/v1/tasks`
- **Method:** `GET`
- **Description:** Retrieve a list of all tasks.

### Get a Single Task

- **URL:** `/api/v1/tasks/:id`
- **Method:** `GET`
- **Description:** Retrieve details of a single task by its ID.

### Update a Task

- **URL:** `/api/v1/tasks/:id`
- **Method:** `PUT`
- **Description:** Update an existing task.
- **Request Body:** (Include fields you want to update)
  ```json
  {
    "title": "Updated Task Title",
    "status": "In Progress"
  }
  ```

### Delete a Task

- **URL:** `/api/v1/tasks/:id`
- **Method:** `DELETE`
- **Description:** Delete a task by its ID.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any changes.

## License

This project is licensed under the MIT License.
