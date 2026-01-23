import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import ViwerMoreOpitoinsTasks from "./ViwerMoreOpitoinsTasks";
import EditFormMenuRight from "./EditFormMenuRight";

const RightMenu = () => {
  const { getIdTask, tasks, toggleEdit, setToggleEdit, toggleRightMenu } =
    useContext(TaskContext);
  const task = tasks.find((element) => element.id === getIdTask);
  const handleEdit = () => {
    setToggleEdit(false);
  };

  return (
    <aside
      className={` 
        fixed top-0 right-0 h-full w-screen flex flex-col text-white 
        p-2 bg-stone-900 transition-all duration-300 sm:w-64   ${
          toggleRightMenu ? "translate-x-0 " : "translate-x-full  "
        }`}
    >
      <div className="flex flex-1 justify-end flex-col">
        {toggleEdit ? (
          <ViwerMoreOpitoinsTasks task={task} handleEdit={handleEdit} />
        ) : (
          <EditFormMenuRight task={task} toggleEdit={toggleEdit} />
        )}
      </div>
    </aside>
  );
};

export default RightMenu;
