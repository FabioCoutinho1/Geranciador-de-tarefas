import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [getIdTask, setGetIdTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [toggleLeftMenu, setToggleLeftMenu] = useState(false);
  const [showPageFavorite, setShowPageFavorite]=useState(false)

  const fetchTask = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    setTasks(data);
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
      fetchTask();
    } catch (erro) {
      console.error(erro);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        getIdTask,
        setGetIdTask,
        tasks,
        setTasks,
        fetchTask,
        upDateTaskField,
        toggleEdit,
        setToggleEdit,
        toggleLeftMenu,
        setToggleLeftMenu,
        showPageFavorite,
        setShowPageFavorite
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
