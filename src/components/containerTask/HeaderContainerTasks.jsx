import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { MdOutlineMenu } from "react-icons/md";
import { getDate } from "../../utils/getDate";

const HeaderContainerTasks = () => {
  const { setToggleLeftMenu } = useContext(TaskContext);
  const data = getDate.newDate();

  const handleToggleLeftMenu = (e) => {
    e.stopPropagation();
    setToggleLeftMenu(true);
  };

  return (
    <header className="text-white flex mb-4">
      <div className=" cursor-default">
        <MdOutlineMenu
          onClick={handleToggleLeftMenu}
          className="cursor-pointer font-bold text-3xl"
        />
        <h1 className="text-3xl font-bold">My Work</h1>
        <p>{data}</p>
      </div>
    </header>
  );
};

export default HeaderContainerTasks;
