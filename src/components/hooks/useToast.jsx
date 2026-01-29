import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export const useToast = () => {
  const { setMessage } = useContext(TaskContext);
  const [timer, setTimer] = useState(null);

  const showMsg = (message, typeMsg = "success") => {
    if (timer) clearTimeout(timer);
    setMessage({ text: message, type: typeMsg });

    const newTimer = setTimeout(() => {
      setMessage({ text: "", type: "" });
    }, 3000);

    setTimer(newTimer);
  };

  return { showMsg };
};
