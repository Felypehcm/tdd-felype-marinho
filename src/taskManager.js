export default class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description = "") {
    if (!title || title.trim() === "") {
      throw new Error("Título é obrigatório");
    }

    const task = {
      title: title.trim(),
      description: description.trim(),
      completed: false,
    };

    this.tasks.push(task);
  }

  listTasks() {
    return this.tasks;
  }
}
