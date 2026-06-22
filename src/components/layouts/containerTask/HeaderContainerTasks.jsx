import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { MdOutlineMenu } from "react-icons/md";
import { getDate } from "../../../utils/getDate";

const HeaderContainerTasks = () => {
  const { setToggleLeftMenu, filter, userName } = useContext(TaskContext);
  const data = getDate.newDate();

  const handleToggleLeftMenu = (e) => {
    e.stopPropagation();
    setToggleLeftMenu(true);
  };

  const filterText = {
    "important" : "Importante",
    "all": "Todas tarefas"
  }

  return (
    <header className="mb-4 flex shrink-0 text-white">
      <div className=" cursor-default">
        <MdOutlineMenu
          onClick={handleToggleLeftMenu}
          className="cursor-pointer font-bold text-3xl"
        />
        <h1 className="text-3xl font-bold">{userName}</h1>
        <p>{data}</p>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <p>Filtro: <span>{filterText[filter]}</span></p>
      </div>
    </header>
  );
};

export default HeaderContainerTasks;
