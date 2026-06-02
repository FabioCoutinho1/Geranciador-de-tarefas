const BASE_URL = "http://localhost:3000";
const token = localStorage.getItem("token");

export const taskServic = {
  createTask: async (newTask) => {
    try {
      const res = await fetch(`${BASE_URL}/task`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!res.ok) {
        throw new Error(res.message || "Erro ao salvar a tarefa");
      }

      return await res.json();
    } catch (error) {
      console.error(error);
    }
  },

  getTask: async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/task`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (res.status === 401) {
      localStorage.removeItem("token");
      navigation("/login");
      return;
    }

    return await res.json();
  },

  upDateTaskField: async (field, value, id) => {
    try {
      const res = await fetch(`${BASE_URL}/task/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [field]: value }),
      });

      return await res.json();
    } catch (erro) {
      console.log(erro);
    }
  },

  Delete: async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/task/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    } catch (erro) {
      console.log(erro);
    }
  },
};
