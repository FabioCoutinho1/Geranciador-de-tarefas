export const authService = {
  login: async (data) => {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resposeDate = await res.json();

    if (!res.ok) throw new Error(resposeDate.message || "Credencias envalidas");

    return resposeDate;
  },
};
