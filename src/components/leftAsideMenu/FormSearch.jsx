import { MdSearch } from "react-icons/md";

const FormSearch = () => {
  return (
    <form className="my-4 relative">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Buscar tarefa"
        className="
        bg-stone-800 rounded-md text-stone-400 placeholder:stroke-neutral-500
        pl-4 pr-10 py-2 w-full  focus:border-b-2 border-stone-50 outline-0"
      />
      <label htmlFor="search">
        <MdSearch className="text-stone-50 text-2xl absolute top-2 right-2" />
      </label>
    </form>
  );
};

export default FormSearch;
