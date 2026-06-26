import { useCallback, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { userService } from "../services/userService";
import { useAuthError } from "./useAuthError";
import { useToast } from "./useToast";

export const useUser = () => {
  const { setUserName } = useContext(TaskContext);
  const { handleAuthError } = useAuthError();
  const { showMsg } = useToast();

  const getUserInfo = useCallback(async () => {
    try {
      const userInfo = await userService.getInfoUser();
      setUserName(userInfo.userName);
    } catch (err) {
      if (handleAuthError(err.status)) return;

      showMsg(err.message || "Erro ao carregar usuario", "error");
    }
  }, [handleAuthError, setUserName, showMsg]);

  return { getUserInfo };
};
