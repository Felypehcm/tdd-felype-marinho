import TaskManager from "../src/taskManager.js";

describe("Gerenciador de Tarefas", () => {
  test("não deve permitir adicionar tarefa sem título", () => {
    const manager = new TaskManager();
    expect(() => manager.addTask("", "descrição qualquer"))
      .toThrow("Título é obrigatório");
  });
});

test("deve adicionar uma tarefa com sucesso", () => {
  const manager = new TaskManager();
  manager.addTask("Comprar leite", "Ir ao supermercado");

  const tasks = manager.listTasks();
  expect(tasks.length).toBe(1);
  expect(tasks[0].title).toBe("Comprar leite");
  expect(tasks[0].description).toBe("Ir ao supermercado");
  expect(tasks[0].completed).toBe(false);
});

test("não deve permitir tarefas com o mesmo título", () => {
  const manager = new TaskManager();
  manager.addTask("Lavar carro", "no sábado");

  expect(() => manager.addTask("Lavar carro", "domingo"))
    .toThrow("Já existe uma tarefa com este título");
});
