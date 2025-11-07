import TaskManager from "../src/taskManager.js";

describe("Gerenciador de Tarefas", () => {
  test("não deve permitir adicionar tarefa sem título", () => {
    const manager = new TaskManager();
    expect(() => manager.addTask("", "descrição qualquer"))
      .toThrow("Título é obrigatório");
  });
});
