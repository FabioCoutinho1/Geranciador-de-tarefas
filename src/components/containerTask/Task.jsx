import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useTask } from "../hooks/useTask";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Task = ({ task, icon: Icon }) => {
  const { setGetIdTask } = useContext(TaskContext);
  const { upDataTask } = useTask();

  const handleToggleCheck = async (e) => {
    e.stopPropagation();
    upDataTask("checkend", !task.checkend, task.id);
  };

  const handleToggleFavorit = async (e) => {
    e.stopPropagation();
    upDataTask("favorit", !task.favorit, task.id);
  };

  const handleClick = () => {
    setGetIdTask(task.id);
    console.log("Foi clicado");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-stone-800 text-white cursor-pointer hover:bg-stone-700 py-1.5 px-2 flex justify-between items-center gap-3.5"
    >
      <button onClick={handleToggleCheck}>
        <Icon className="cursor-pointer text-2xl" />
      </button>
      <h3 className="flex-1 text-[18px] flex items-center">{task.taskName}</h3>
      <button onClick={handleToggleFavorit}>
        <MdOutlineStarPurple500
          className={`cursor-pointer text-2xl ${
            task.favorit ? "text-amber-300" : "text-gray-400"
          }`}
        />
      </button>
    </div>
  );
};

export default Task;
