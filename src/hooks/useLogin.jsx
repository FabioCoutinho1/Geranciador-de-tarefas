import { useNavigate } from "react-router";
import { useAuth } from "./useAuth";
import { authService } from "../services/authService";
import { useState } from "react";

export const useLogin = () => {
  const [hasError, setHasError] = useState(false);
  const [messageError, setMessageError] = useState("");

  // const { setUserName } = useContext(TaskContext);
  const navigate = useNavigate();
  const { singIn, startLoading, stopLoading } = useAuth();

  const handleInputChange = () => {
    if (hasError) setHasError(false);
  };

  const handleLogin = async (data) => {
    setHasError(false);
    startLoading();

    try {
      const response = await authService.login(data);
      singIn(response.token);
      navigate("/");
      // setUserName(response.user.user_name);
    } catch (error) {
      setMessageError(error.message);
      setHasError(true);
    } finally {
      stopLoading();
    }
  };

  return {
    handleLogin,
    handleInputChange,
    hasError,
    setHasError,
    messageError,
  };
};
