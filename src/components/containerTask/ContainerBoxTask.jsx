import { useEffect, useMemo } from "react";
import BoxTasks from "./BoxTasks";
import BoxTasksDone from "./BoxTasksDone";
import InputTasks from "./InputTasks";
import HeaderContainerTasks from "./HeaderContainerTasks";
import { useTask } from "../hooks/useTask";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const ContainerBoxTask = () => {
  const {
    toggleLeftMenu,
    setToggleLeftMenu,
    setGetIdTask,
    getIdTask,
    toggleRightMenu,
    setToggleRightMenu,
    searchValueInput,
  } = useContext(TaskContext);

  const { loadTask, tasks, filter } = useTask();

  useEffect(() => {
    loadTask();
  }, []);

  const filterTasks = useMemo(() => {
    if (filter === "all") {
      return tasks;
    }

    return tasks.filter((el) => el.favorit);
  }, [filter, tasks]);

  const searchFilter = useMemo(() => {
    if (searchValueInput === "") {
      return filterTasks;
    }

    return filterTasks.filter((el) => {
      return el.taskName.trim().toLowerCase().includes(searchValueInput);
    });
  }, [filterTasks, searchValueInput]);

  const sortInportante = [...searchFilter].sort(
    (a, b) => Number(b.favorit) - Number(a.favorit),
  );
  const closeMenus = (e) => {
    e.stopPropagation();

    if (toggleLeftMenu) {
      setToggleLeftMenu(false);
    }

    // if (toggleRightMenu && getIdTask !== null) {
    //   setGetIdTask(null);
    //   setToggleRightMenu(false);
    // }
  };

  return (
    <div
      className={` p-2 h-full flex flex-1 flex-col justify-between relative ${
        toggleLeftMenu && "blur-sm bg-stone-950/60 z-40"
      } `}
      onClick={closeMenus}
    >
      <HeaderContainerTasks />
      <BoxTasks tasks={sortInportante} />
      <BoxTasksDone tasks={sortInportante} />
      <InputTasks />
    </div>
  );
};

export default ContainerBoxTask;
