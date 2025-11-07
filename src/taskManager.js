export default class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description = "") {
    if (!title || title.trim() === "") {
      throw new Error("Título é obrigatório");
    }

    const existing = this.tasks.find(
      (t) => t.title.toLowerCase() === title.trim().toLowerCase()
    );
    if (existing) {
      throw new Error("Já existe uma tarefa com este título");
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

  completeTask(title) {
    const task = this.tasks.find(
      (t) => t.title.toLowerCase() === title.trim().toLowerCase()
    );

    if (!task) {
      throw new Error("Tarefa não encontrada");
    }

    task.completed = true;
  }

  removeTask(title) {
    const initialLength = this.tasks.length;

    this.tasks = this.tasks.filter(
      (t) => t.title.toLowerCase() !== title.trim().toLowerCase()
    );

    if (this.tasks.length === initialLength) {
      throw new Error("Tarefa não encontrada");
    }
  }
}
