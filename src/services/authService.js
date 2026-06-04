export const authService = {
  login: async (data) => {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseDate = await res.json();
    if (!res.ok)
      throw new Error(responseDate.message || "Credencias envalidas");

    return responseDate;
  },
 
  register: async (data) => {
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();

    if (!res.ok) throw new Error(response.message || "Credencias envalidas");

    return response;
  },
};
