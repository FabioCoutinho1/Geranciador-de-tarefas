import Task from "./Task";
import { MdCheckCircle } from "react-icons/md";

const BoxTasksDone = ({ tasks }) => {
  const tasksDone = tasks.filter((task) => task.done);

  return (
    <div className="mb-2 flex min-h-0 flex-1 flex-col gap-1 overflow-auto">
      <h1 className="text-white">Tarefas feitas</h1>
      {tasksDone.map((task) => (
        <Task key={task.id} task={task} icon={MdCheckCircle} />
      ))}
    </div>
  );
};

export default BoxTasksDone;
