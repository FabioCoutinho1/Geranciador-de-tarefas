import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { useTask } from "../../../hooks/useTask";
import { getDate } from "../../../utils/getDate";
import Task from "../../layouts/containerTask/Task";
import Button from "../../ui/Button";

import {
  MdOutlineDelete,
  MdOutlineEdit,
  MdCheckCircle,
  MdOutlineCircle,
  MdClose,
} from "react-icons/md";

const ViwerMoreOpitoinsTasks = ({ task, handleEdit }) => {
  const { setGetIdTask, setToggleRightMenu } = useContext(TaskContext);
  const { deleteTask } = useTask();

  const getTaskIcon = (done) => (done ? MdCheckCircle : MdOutlineCircle);

  const closeRightMenu = () => {
    setToggleRightMenu(false);
    setGetIdTask(null);
  };

  const handleDelete = async () => {
    deleteTask(task.id);
    setGetIdTask(null);
    setToggleRightMenu(false);
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
        <Task task={task} icon={getTaskIcon(task.done)} />
      ) : (
        <p>Carregando</p>
      )}

      <div className="flex flex-1 flex-col gap-2  mt-2">
        <Button
          onClick={handleDelete}
          icon={MdOutlineDelete}
          label={"Apagar"}
        />
        <Button onClick={handleEdit} icon={MdOutlineEdit} label={"Editar"} />
      </div>
      <p className="">
        Criada em:{" "}
        <span>{task ? getDate.formatDate(task?.createAt) : "carregando"}</span>
      </p>
    </>
  );
};

export default ViwerMoreOpitoinsTasks;
