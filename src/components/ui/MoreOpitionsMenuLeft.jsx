const MoreOpitionsMenuLeft = ({
  icon: Icon,
  opitionName,
  colorIcon = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
      w-full flex items-center text-2xl text-stone-50 duration-200 
      gap-4 cursor-pointer hover:bg-stone-800 p-1 rounded-sm"
    >
      <span className={`${colorIcon}`}>{<Icon />}</span>
      {opitionName}
    </button>
  );
};
export default MoreOpitionsMenuLeft;
