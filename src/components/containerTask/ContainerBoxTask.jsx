import { useEffect, useMemo } from "react";
import BoxTasks from "./BoxTasks";
import BoxTasksDone from "./BoxTasksDone";
import InputTasks from "./InputTasks";
import HeaderContainerTasks from "./HeaderContainerTasks";

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const ContainerBoxTask = () => {
  const { tasks, filter, fetchTask, toggleLeftMenu } = useContext(TaskContext);

  const filterTasks = useMemo(() => {
    if (filter === "all") {
      return tasks;
    }

    return tasks.filter((el) => el.favorit);
  }, [filter, tasks]);

  useEffect(() => {
    fetchTask();
  }, []);

  // const sortInportante = [...filterTasks].sort(
  //   (a, b) => Number(b.favorit) - Number(a.favorit)
  // );

  return (
    <div
      className={` p-2 h-full flex flex-1 flex-col justify-between relative ${
        toggleLeftMenu && "blur-sm bg-stone-950/60 z-40"
      } `}
    >
      <HeaderContainerTasks />
      <BoxTasks tasks={filterTasks} />
      <BoxTasksDone tasks={filterTasks} />
      <InputTasks onTaskCreate={fetchTask} />
    </div>
  );
};

export default ContainerBoxTask;
