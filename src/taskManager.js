export default class TaskManager {
  addTask(title, description) {
    if (!title || title.trim() === "") {
      throw new Error("Título é obrigatório");
    }
  }
}
