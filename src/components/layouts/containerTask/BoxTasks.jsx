import Task from "./Task";
import { MdOutlineCircle } from "react-icons/md";

const BoxTasks = ({ tasks }) => {
  const tasksNoDone = tasks.filter((task) => !task.done);

  return (
    <div className="mb-2 flex max-h-[50%] min-h-0 flex-col gap-1 overflow-auto">
      {tasksNoDone.map((task) => {
        return <Task key={task.id} task={task} icon={MdOutlineCircle} />;
      })}
    </div>
  );
};

export default BoxTasks;
