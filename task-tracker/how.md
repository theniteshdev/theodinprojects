## Task Tracker CLI Project

Build a command-line tool to manage your tasks. All data must be saved to a local **JSON file**.

---

### Requirements

- **Language:** Use any language (no external libraries/frameworks).
- **Storage:** Use a `tasks.json` file in the current directory (create it if it's missing).
- **Interface:** Command-line inputs using positional arguments.
- **Data Model:** Each task must have:
- `id`: Unique identifier
- `description`: Task details
- `status`: `todo`, `in-progress`, or `done`
- `createdAt` & `updatedAt`: Timestamps

### Features

| Action            | Command Example                               |
| ----------------- | --------------------------------------------- |
| **Add**           | `task-cli add "Buy groceries"`                |
| **Update**        | `task-cli update 1 "New description"`         |
| **Delete**        | `task-cli delete 1`                           |
| **Mark Status**   | `task-cli mark-in-progress 1` / `mark-done 1` |
| **List All**      | `task-cli list`                               |
| **List Filtered** | `task-cli list done` / `todo` / `in-progress` |

---

### Development Steps

1. **Setup:** Initialize your project folder and Git repository.
2. **CLI Structure:** Build the framework to parse user arguments.
3. **Storage:** Implement logic to read/write to the JSON file.
4. **Core Logic:** Build features one by one (Add → List → Update/Delete → Mark Status).
5. **Test:** Verify data consistency in the JSON file after every command.
6. **Finalize:** Clean up your code and write a `README.md` for users.
