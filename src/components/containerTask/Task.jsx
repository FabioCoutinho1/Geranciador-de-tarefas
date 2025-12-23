import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Task = ({ task, icon: Icon }) => {
  const { upDateTaskField, setGetIdTask} =
    useContext(TaskContext);

  const handleToggleCheck = async (e) => {
    e.stopPropagation();
    upDateTaskField("checkend", !task.checkend, task.id);
  };

  const handleToggleFavorit = (e) => {
    e.stopPropagation();
    upDateTaskField("favorit", !task.favorit, task.id);
  };

  const handleClick = () => {
    setGetIdTask(task.id);

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
