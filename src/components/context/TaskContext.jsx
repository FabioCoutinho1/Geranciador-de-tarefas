import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [getIdTask, setGetIdTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [toggleLeftMenu, setToggleLeftMenu] = useState(false);
  const [toggleRightMenu, setToggleRightMenu] = useState(false);
  const [searchValueInput, setSearchVelueInput] = useState("");

  

  useEffect(() => {
    if (getIdTask !== null) {
      setToggleRightMenu(true);
    }
  }, [getIdTask]);

  

 

  return (
    <TaskContext.Provider
      value={{
        getIdTask,
        setGetIdTask,
        tasks,
        setTasks,
        filter,
        setFilter,
        toggleEdit,
        setToggleEdit,
        toggleLeftMenu,
        setToggleLeftMenu,
        toggleRightMenu,
        setToggleRightMenu,
        searchValueInput,
        setSearchVelueInput,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
