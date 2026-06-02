import { taskServic } from "../services/taskServices";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useToast } from "./useToast";

export const useTask = () => {
  const { tasks, setTasks, filter } = useContext(TaskContext);
  const { showMsg } = useToast();

  const loadTask = async () => {
    try {
      const data = await taskServic.getTask();
      setTasks(data.tasks);
    } catch (err) {
      alert("Não foi Possivel carregar as tarefas");
    }
  };

  const createNewTask = async (name) => {
    try {
      const newTask = await taskServic.createTask(name);
      setTasks((prevTask) => [...prevTask, newTask]);
      showMsg("Tarefa adicionada com sucesso", "success");
    } catch (err) {
      showMsg("Erro ao criar nova tarefa", "error");
    }
  };

  const upDataTask = async (field, value, id) => {
    try {
      const taskUpDate = await taskServic.upDateTaskField(field, value, id);
      setTasks((prevTask) =>
        prevTask.map((el) => (el.id === id ? taskUpDate : el)),
      );
      console.log("updateTask", taskUpDate);

      showMsg("Tarefa atualizada", "success");
    } catch (err) {
      showMsg("Erro ao atualizar a tarefa", "error");
    }
  };

  const deleteTask = async (id) => {
    try {
      const newTask = await taskServic.Delete(id);
      setTasks((prevTask) => prevTask.filter((el) => el.id !== id));
      showMsg("Tarefa Apagada", "success");
    } catch (error) {
      showMsg("Erro ao apagar a tarefa", "error");
    }
  };
  return {
    tasks,
    filter,
    createNewTask,
    loadTask,
    upDataTask,
    deleteTask,
  };
};
