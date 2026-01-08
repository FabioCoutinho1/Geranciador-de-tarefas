import { useContext, useState } from "react";

import { MdSearch } from "react-icons/md";
import { TaskContext } from "../context/TaskContext";

const FormSearch = () => {
  const { setSearchVelueInput } = useContext(TaskContext);

  const handleSearch = (e) => {
    console.log(e.target.value.toLowerCase().trim());

    setSearchVelueInput(e.target.value.toLowerCase().trim());
  };
  return (
    <div className="my-4 relative">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Buscar tarefa"
        className="
        bg-stone-800 rounded-md text-stone-400 placeholder:stroke-neutral-500
        pl-4 pr-10 py-2 w-full  focus:border-b-2 border-stone-50 outline-0"
        onChange={handleSearch}
      />
      <label htmlFor="search">
        <MdSearch className="text-stone-50 text-2xl absolute top-2 right-2" />
      </label>
    </div>
  );
};

export default FormSearch;
