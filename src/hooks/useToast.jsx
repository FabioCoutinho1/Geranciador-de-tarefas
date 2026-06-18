import { useCallback, useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

export const useToast = () => {
  const { setMessage } = useContext(TaskContext);
  const timerRef = useRef(null);

  const showMsg = useCallback((message, typeMsg = "success") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessage({ text: message, type: typeMsg });

    timerRef.current = setTimeout(() => {
      setMessage({ text: "", type: "" });
    }, 3000);
  }, [setMessage]);

  return { showMsg };
};
