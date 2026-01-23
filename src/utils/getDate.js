export const getDate = {
  newDate: () => {
    const date = new Date().toLocaleDateString();
    return date;
  },
  dateSendServe: () => {
    const date = new Date().toISOString();
    return date;
  },

  formatDate: (dateServer) => {
    const date = new Date(dateServer).toLocaleDateString();
    return date;
  },
};
