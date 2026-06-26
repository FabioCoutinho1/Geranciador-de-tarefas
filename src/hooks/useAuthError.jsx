import { useCallback } from "react";
import { useAuth } from "./useAuth";
import { useToast } from "./useToast";

export const useAuthError = () => {
  const { singOut } = useAuth();
  const { showMsg } = useToast();

  const handleAuthError = useCallback(
    (status) => {
      if (status !== 401) return false;

      const hasToken = Boolean(localStorage.getItem("token"));

      singOut();

      if (hasToken) {
        showMsg("Sessao expirada. Faca login novamente.", "error");
      }

      return true;
    },
    [showMsg, singOut],
  );

  return { handleAuthError };
};
