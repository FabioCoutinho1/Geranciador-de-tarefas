import { useEffect, useState, useRef } from "react";
import { getDate } from "../../../utils/getDate";
import { useTask } from "../../../hooks/useTask";
import { MdAdd } from "react-icons/md";

const InputTasks = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const { createNewTask, tasks } = useTask();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = inputValue.trim();
    // const date = getDate.dateSendServe();

    const isDuplicated = tasks.some(
      (task) => task.name.toLowerCase() === name.toLowerCase(),
    );

    if (isDuplicated) {
      return alert("Ja existe uma tarefa com esse nome");
    }

    if (!name || !name.trim()) {
      return alert("A tarefa precisa ter um nome");
    }

    const newTask = {
      name: name,
      done: false,
      favorite: false,
      // create_at: date,
    };

    createNewTask(newTask);
    setInputValue("");
    inputRef.current.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex shrink-0 items-center bg-stone-800 text-white"
    >
      <input
        className="min-w-0 flex-1 border-none px-3 py-2 text-2xl outline-none"
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
