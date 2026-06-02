import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useAuth = () => {
  return useContext(TaskContext);
};
