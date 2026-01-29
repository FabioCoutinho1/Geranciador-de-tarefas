const Toast = ({ text, type = "success" }) => {
  const styleMsg = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div className="fixed z-50 bottom-15 left-2 bg-gray-800  text-gray-400 font-bold p-3 rounded-lg">
      <p className="flex gap-3 items-center">
        <span
          className={`inline-block w-4 h-4 ${styleMsg[type]} rounded-full`}
        ></span>{" "}
        {text}
      </p>
    </div>
  );
};

export default Toast;
