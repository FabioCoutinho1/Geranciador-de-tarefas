import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { MdClose, MdStarOutline, MdDensitySmall } from "react-icons/md";
import FormSearch from "./FormSearch";
import MoreOpitionsMenuLeft from "../../ui/MoreOpitionsMenuLeft";

const LeftMenu = () => {
  const { toggleLeftMenu, setFilter, setToggleLeftMenu } =
    useContext(TaskContext);

  const closLeftMenu = () => {
    setToggleLeftMenu(false);
  };

  const showInpontant = () => {
    setFilter("inportante");
    setToggleLeftMenu(false);
  };

  const showAll = () => {
    setFilter("all");
    setToggleLeftMenu(false);
  };

  return (
    <>
      <aside
        className={`
        fixed top-0 left-0 h-dvh w-64 bg-stone-900
        transition-all duration-300 ease-in-out p-2 z-50
        ${toggleLeftMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <MdClose onClick={closLeftMenu} className="text-white text-2xl" />

        <FormSearch />

        <div>
          <MoreOpitionsMenuLeft
            icon={MdDensitySmall}
            opitionName={"Todas Tarefas"}
            colorIcon="text-gray-400"
            onClick={showAll}
          />
          <MoreOpitionsMenuLeft
            icon={MdStarOutline}
            opitionName={"Favoritas"}
            colorIcon="text-pink-400"
            onClick={showInpontant}
          />
        </div>
      </aside>
    </>
  );
};

export default LeftMenu;
