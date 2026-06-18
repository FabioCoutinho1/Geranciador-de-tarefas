import { taskServic } from "../services/taskServices";
import { useCallback, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useToast } from "./useToast";

export const useTask = () => {
  const { tasks, setTasks, filter, startLoading, stopLoading } =
    useContext(TaskContext);
  const { showMsg } = useToast();

  const loadTask = useCallback(async () => {
    startLoading();

    try {
      const data = await taskServic.getTask();
      console.log(data);
      setTasks(data);
    } catch (err) {
      showMsg(err.message || "Erro ao carregar tarefas", "error");
    } finally {
      stopLoading();
    }
  }, [setTasks, showMsg, startLoading, stopLoading]);

  const createNewTask = async (name) => {
    startLoading();

    try {
      const newTask = await taskServic.createTask(name);
      setTasks((prevTask) => [...prevTask, newTask]);
      showMsg("Tarefa adicionada com sucesso", "success");
    } catch (err) {
      showMsg(err.message || "Erro ao criar nova tarefa", "error");
    } finally {
      stopLoading();
    }
  };

  const upDataTask = async (field, value, id) => {
    startLoading();

    try {
      const taskUpDate = await taskServic.upDateTaskField(field, value, id);

      setTasks((prevTask) =>
        prevTask.map((el) => (el.id === id ? taskUpDate : el)),
      );

      showMsg("Tarefa atualizada", "success");
    } catch (err) {
      showMsg(err.message || "Erro ao atualizar a tarefa", "error");
    } finally {
      stopLoading();
    }
  };

  const deleteTask = async (id) => {
    startLoading();

    try {
      await taskServic.Delete(id);
      setTasks((prevTask) => prevTask.filter((el) => el.id !== id));
      showMsg("Tarefa Apagada", "success");
    } catch (error) {
      showMsg(error.message || "Erro ao apagar a tarefa", "error");
    } finally {
      stopLoading();
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
