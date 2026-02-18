const Toast = ({ text, type = "success" }) => {
  const styleMsg = {
    success: "bg-green-200 text-green-700",
    error: "bg-red-200 text-red-700",
  };

  return (
    <div
      className={`fixed z-50 top-3 right-3 ${styleMsg[type]} font-bold p-3 rounded-lg`}
    >
      <p className="flex gap-3 items-center"> {text}</p>
    </div>
  );
};

export default Toast;
