const BASE_URL = import.meta.env.VITE_BASE_URL;

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
      `${BASE_URL}/user/login`,
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
      `${BASE_URL}/user/register`,
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
