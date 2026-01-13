import { taskServic } from "../../services/taskServices";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export const useTask = () => {
  const { tasks, setTasks, filter, setGetIdTask } = useContext(TaskContext);
  const [error, setError] = useState("");

  const loadTask = async () => {
    try {
      const data = await taskServic.getTask();
      setTasks(data);
    } catch (err) {
      setError("Não foi Possivel carregar as tarefas");
    }
  };

  const createNewTask = async (name) => {
    try {
      const newTask = await taskServic.createTask(name);
      setTasks((prevTask) => [...prevTask, newTask]);
    } catch (err) {
      setError("Erro ao criar nova tarefa");
    }
  };

  const upDataTask = async (field, value, id) => {
    try {
      const taskUpDate = await taskServic.upDateTaskField(field, value, id);
      setTasks((prevTask) =>
        prevTask.map((el) => (el.id === id ? taskUpDate : el))
      );
    } catch (err) {
      setError("Erro ao atualizar a tarefa");
    }
  };

  const deleteTask = async (id) => {
    try {
      const newTask = await taskServic.Delete(id);
      setTasks((prevTask) => prevTask.filter((el) => el.id !== id));
    } catch (error) {
      setError("Erro ao apagar a tarefa");
    }
  };
  return {
    tasks,
    filter,
    error,
    createNewTask,
    loadTask,
    upDataTask,
    deleteTask,
  };
};
