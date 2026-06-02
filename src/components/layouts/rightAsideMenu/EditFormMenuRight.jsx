import { MdSave, MdCancelPresentation } from "react-icons/md";
import { useContext, useRef, useEffect, useState } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { useTask } from "../../../hooks/useTask";
import Button from "../../ui/Button";

const EditFormMenuRigth = ({ task }) => {
  const { setToggleEdit, tasks } = useContext(TaskContext);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(task.name || "");
  const { upDataTask } = useTask();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputValue.trim();

    const isDuplicated = tasks.some(
      (task) => task.name.toLowerCase() === name.toLowerCase(),
    );

    if (isDuplicated) {
      return alert("Ja existe uma tarefa com esse nome");
    }

    if (!name || !name.trim()) {
      return alert("A tarefa precisa ter um nome");
    }

    if (inputValue == task.name) {
      return alert("o nome nao pode ser o mesmo");
    }

    upDataTask("name", name, task.id);

    setToggleEdit(true);
  };

  const handleCancel = () => {
    setToggleEdit(true);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2  mt-2">
      <input
        type="text"
        value={inputValue}
        className="outline-0"
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button label={"Salvar"} icon={MdSave} type={"submit"} />
      <Button
        label={"Cancelar"}
        icon={MdCancelPresentation}
        type={"reset"}
        onClick={handleCancel}
      />
    </form>
  );
};

export default EditFormMenuRigth;
