import { createContext, useCallback, useEffect, useState } from "react";
import Toast from "../components/ui/Toast";
import GlobalLoading from "../components/ui/GlobalLoading";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [filter, setFilter] = useState("all");
  const [getIdTask, setGetIdTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [toggleLeftMenu, setToggleLeftMenu] = useState(false);
  const [toggleRightMenu, setToggleRightMenu] = useState(false);
  const [searchValueInput, setSearchVelueInput] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loadingCount, setLoadingCount] = useState(0);

  const startLoading = useCallback(() => {
    setLoadingCount((prevLoadingCount) => prevLoadingCount + 1);
  }, []);

  const stopLoading = useCallback(() => {
    setLoadingCount((prevLoadingCount) => Math.max(prevLoadingCount - 1, 0));
  }, []);

  const isLoading = loadingCount > 0;

  useEffect(() => {
    const storageToken = localStorage.getItem("token");

    if (storageToken) setToken(storageToken);
  }, []);

  const singIn = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const singOut = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

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
        token,
        singIn,
        singOut,
        isAuthenticated: !!token,
        userName,
        setUserName,
        isLoading,
        startLoading,
        stopLoading,
      }}
    >
      {children}
      <GlobalLoading isLoading={isLoading} />
      {message.text && <Toast text={message.text} type={message.type} />}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
