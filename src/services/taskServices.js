const BASE_URL = "http://localhost:3000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

const request = async (url, options = {}) => {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers,
    },
  });

  const response = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(response?.message || "Erro ao processar a tarefa");
  }

  return response;
};

export const taskServic = {
  createTask: async (newTask) => {
    return request(`${BASE_URL}/task`, {
      method: "POST",
      body: JSON.stringify(newTask),
    });
  },

  getTask: async () => {
    return request(`${BASE_URL}/task`, {
      method: "GET",
    });
  },

  upDateTaskField: async (field, value, id) => {
    return request(`${BASE_URL}/task/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ [field]: value }),
    });
  },

  Delete: async (id) => {
    return request(`${BASE_URL}/task/${id}`, {
      method: "DELETE",
    });
  },
};
