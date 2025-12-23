import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import {
  MdOutlineDelete,
  MdOutlineEdit,
  MdCheckCircle,
  MdOutlineCircle,
  MdClose,
} from "react-icons/md";

import Task from "../containerTask/Task";
import Button from "../layouts/Button";

const ViwerMoreOpitoinsTasks = ({ task, handleEdit }) => {
  const { fetchTask, setGetIdTask, setToggleRightMenu } =
    useContext(TaskContext);

  const getTaskIcon = (done) => (done ? MdCheckCircle : MdOutlineCircle);

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setGetIdTask(null);
      fetchTask();
    } catch (erro) {
      console.log(erro);
    }
  };

  const closeRightMenu = () => {
    setToggleRightMenu(false);
    setGetIdTask(null);
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <MdClose
          className="text-2xl font-bold cursor-pointer "
          onClick={closeRightMenu}
        />
      </div>
      {task ? (
        <Task task={task} icon={getTaskIcon(task.checkend)} />
      ) : (
        <p>Carregando</p>
      )}

      <div className="flex flex-col gap-2  mt-2">
        <Button
          onClick={handleDelete}
          icon={MdOutlineDelete}
          label={"Apagar"}
        />
        <Button onClick={handleEdit} icon={MdOutlineEdit} label={"Editar"} />
      </div>
    </>
  );
};

export default ViwerMoreOpitoinsTasks;
