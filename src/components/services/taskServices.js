export function taskServic() {
  const createTask = async (newTask) => {
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
      getTask();
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    return await res.json();
  };

  const upDateTaskField = async (field, value, id) => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Contente-Type": "application/json",
        },
        body: JSON.stringify({ [field]: value }),
      });
      getTask();
    } catch (erro) {
      console.error(erro);
    }
  };

  return [createTask, getTask, upDateTaskField];
}
