import { createContext, useEffect, useState } from "react";
import Toast from "../ui/Toast";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [getIdTask, setGetIdTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [toggleLeftMenu, setToggleLeftMenu] = useState(false);
  const [toggleRightMenu, setToggleRightMenu] = useState(false);
  const [searchValueInput, setSearchVelueInput] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

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
        message,
        setMessage,
      }}
    >
      {children}
      {message.text && <Toast text={message.text} type={message.type} />}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
