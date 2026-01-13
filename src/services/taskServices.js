export const taskServic = {
  createTask: async (newTask) => {
    try {
      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!res.ok) {
        throw new Error("Erro ao salvar a tarefa");
      }

      return await res.json();
    } catch (error) {
      console.error(error);
    }
  },

  getTask: async () => {
    const res = await fetch("http://localhost:3000/tasks");
    return await res.json();
  },

  upDateTaskField: async (field, value, id) => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Contente-Type": "application/json",
        },
        body: JSON.stringify({ [field]: value }),
      });
      return await res.json();
    } catch (erro) {
      console.error(erro);
    }
  },

  Delete: async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    } catch (erro) {
      console.log(erro);
    }
  },
};
