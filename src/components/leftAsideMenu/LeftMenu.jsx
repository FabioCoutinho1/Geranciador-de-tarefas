import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { MdClose, MdStarOutline, MdDensitySmall } from "react-icons/md";
import FormSearch from "./FormSearch";
import MoreOpitions from "../layouts/MoreOpitions";

const LeftMenu = () => {
  const { toggleLeftMenu, setToggleLeftMenu, setShowPageFavorite } =
    useContext(TaskContext);

  const closLeftMenu = () => {
    setToggleLeftMenu(false);
  };

  const showFavorites = () => {
    setShowPageFavorite(true);
  };

  return (
    <>
      <aside
        className={`
        w-64 bg-stone-900 fixed top-0  left-0 h-screen
        transition-all duration-300 ease-in-out p-2 z-50
        ${toggleLeftMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <MdClose onClick={closLeftMenu} className="text-white text-2xl" />

        <FormSearch />

        <div>
          <MoreOpitions
            icon={MdDensitySmall}
            opitionName={"Todas Tarefas"}
            colorIcon="text-gray-400"
            onClick={showFavorites}
          />
          <MoreOpitions
            icon={MdStarOutline}
            opitionName={"Favoritas"}
            colorIcon="text-pink-400"
            onClick={showFavorites}
          />
        </div>
      </aside>
    </>
  );
};

export default LeftMenu;
