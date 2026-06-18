import { useState } from "react";
import { authService } from "../services/authService";
import { useNavigate } from "react-router";
import { useAuth } from "./useAuth";

export const useRegister = () => {
  const [hasError, setHasError] = useState(false);
  const [messageError, setMessageError] = useState("");

  // const { setUserName } = useContext(TaskContext);
  const navigate = useNavigate();
  const { singIn, startLoading, stopLoading } = useAuth();

  const handleInputChange = () => {
    if (hasError) setHasError(false);
  };

  const handleRegister = async (data) => {
    setHasError(false);
    startLoading();

    try {
      const response = await authService.register(data);
      console.log(response.token);
      
      singIn(response.token);
      navigate("/");
      // setUserName(response);
    } catch (error) {
      if (error instanceof Error) {
        setMessageError(error.message);
        setHasError(true);
      }
    } finally {
      stopLoading();
    }
  };

  return { handleRegister, handleInputChange, hasError, messageError };
};
