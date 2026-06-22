const BASE_URL = import.meta.env.VITE_BASE_URL;

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

  if (res.status === 401) {
    console.log("sem acesso");

    localStorage.removeItem("token");
  }

  if (!res.ok) {
    throw new Error(response?.message || "Erro ao processar a tarefa");
  }

  return response;
};

export const userService = {
  getInfoUser: () => {
    return request(`${BASE_URL}/user/infouser`, {
      method: "GET",
    });
  },
};
