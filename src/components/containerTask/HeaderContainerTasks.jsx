import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { MdOutlineMenu } from "react-icons/md";

const HeaderContainerTasks = () => {
  const { setToggleLeftMenu } = useContext(TaskContext);

  const handleToggleLeftMenu = () => {
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
        <p>18/06/2025</p>
      </div>
    </header>
  );
};

export default HeaderContainerTasks;
