import { useEffect, useMemo } from "react";
import BoxTasks from "./BoxTasks";
import BoxTasksDone from "./BoxTasksDone";
import InputTasks from "./InputTasks";
import HeaderContainerTasks from "./HeaderContainerTasks";
import { useTask } from "../../../hooks/useTask";
import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";

const ContainerBoxTask = () => {
  const {
    toggleLeftMenu,
    setToggleLeftMenu,
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

    return tasks.filter((el) => el.favorite);
  }, [filter, tasks]);

  const searchFilter = useMemo(() => {
    if (searchValueInput === "") {
      return filterTasks;
    }

    return filterTasks.filter((el) => {
      return el.name.trim().toLowerCase().includes(searchValueInput);
    });
  }, [filterTasks, searchValueInput]);

  const sortInportante = [...searchFilter].sort(
    (a, b) => Number(b.favorite) - Number(a.favorite),
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
      className={`relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden p-2 ${
        toggleLeftMenu && "blur-sm bg-stone-950/60 z-40"
      } `}
      onClick={closeMenus}
    >
      <HeaderContainerTasks />
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <BoxTasks tasks={sortInportante} />
        <BoxTasksDone tasks={sortInportante} />
      </div>
      <InputTasks />
    </div>
  );
};

export default ContainerBoxTask;
