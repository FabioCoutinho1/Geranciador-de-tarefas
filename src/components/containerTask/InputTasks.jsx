import { useEffect, useState, useRef, useContext } from "react";
import { taskServic } from "../services/taskServices";
import { TaskContext } from "../context/TaskContext";
import { MdAdd } from "react-icons/md";

const InputTasks = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const { fetchTask, tasks } = useContext(TaskContext);
  const [createTask] = taskServic();
  1;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = inputValue.trim();

    const isDuplicated = tasks.some(
      (task) => task.taskName.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicated) {
      return alert("Ja existe uma tarefa com esse nome");
    }

    if (!name || !name.trim()) {
      return alert("A tarefa precisa ter um nome");
    }

    const newTask = {
      id: crypto.randomUUID(),
      taskName: name,
      checkend: false,
      favorit: false,
    };

    createTask(newTask);
    setInputValue("");
    inputRef.current.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-stone-800 text-white"
    >
      <input
        className="flex-1 px-3 text-2xl py-2 border-none outline-none"
        type="text"
        name="taskName"
        id="taskName"
        ref={inputRef}
        value={inputValue}
        placeholder="Adicionar tarefa"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="cursor-pointer text-2xl px-1" type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default InputTasks;
