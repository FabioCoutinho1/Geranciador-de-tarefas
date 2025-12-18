import { useContext } from "react";
import BoxTasks from "./BoxTasks";
import HeaderContainerTasks from "./HeaderContainerTasks";
import { TaskContext } from "../context/TaskContext";
import { MdOutlineCircle } from "react-icons/md";
import Task from "./Task";

const FavoritPage = () => {
  const { tasks } = useContext(TaskContext);
  const favoritTasks = tasks.filter((el) => el.favorit);
  return (
    <div className="flex flex-col gap-1 mb-2 overflow-auto max-h-1/2">
      {favoritTasks.map((task) => (
        <Task key={task.id} task={task} icon={MdOutlineCircle} />
      ))}
    </div>
  );
};

export default FavoritPage;
