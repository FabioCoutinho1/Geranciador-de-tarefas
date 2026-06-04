const BASE_URL = import.meta.env.VITE_URL_API;

const request = async (url, options = {}, messageError) => {
  const res = await fetch(url, {
    ...options,
    headers: { ...options.headers },
  });

  const response = await res.json().catch(() => null);

  if (!res.ok) throw new Error(response?.message || messageError);

  return response;
};

export const authService = {
  login: async (data) => {
    return request(
      `${BASE_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      },
      "Erro ao fazer o login",
    );
  },

  register: async (data) => {
    return request(
      `${BASE_URL}/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
      "Error ao cadastrar o usuario",
    );
  },
};
