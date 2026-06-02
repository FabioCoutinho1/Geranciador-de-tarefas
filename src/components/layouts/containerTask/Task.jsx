import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { useTask } from "../../../hooks/useTask";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Task = ({ task, icon: Icon }) => {
  const { setGetIdTask } = useContext(TaskContext);
  const { upDataTask } = useTask();

  const handleToggleCheck = async (e) => {
    e.stopPropagation();
    upDataTask("done", !task.done, task.id);
  };

  const handleToggleFavorit = async (e) => {
    e.stopPropagation();
    upDataTask("favorite", !task.favorite, task.id);
  };

  const handleClick = () => {
    setGetIdTask(task.id);
  };

  return (
    <div
      onClick={handleClick}
      className="flex min-w-0 cursor-pointer items-center justify-between gap-3.5 bg-stone-800 px-2 py-1.5 text-white hover:bg-stone-700"
    >
      <button onClick={handleToggleCheck}>
        <Icon className="cursor-pointer text-2xl" />
      </button>
      <h3 className="flex min-w-0 flex-1 items-center break-words text-[18px]">
        {task.name}
      </h3>
      <button onClick={handleToggleFavorit}>
        <MdOutlineStarPurple500
          className={`cursor-pointer text-2xl ${
            task.favorite ? "text-amber-300" : "text-gray-400"
          }`}
        />
      </button>
    </div>
  );
};

export default Task;
