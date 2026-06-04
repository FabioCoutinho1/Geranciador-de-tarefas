import { useContext, useState } from "react";
import { authService } from "../services/authService";
import { useNavigate } from "react-router";
import { TaskContext } from "../context/TaskContext";
import { useAuth } from "./useAuth";

export const useRegister = () => {
  const [hasError, setHasError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const { setUserName } = useContext(TaskContext);
  const navigate = useNavigate();
  const { singIn } = useAuth();

  const handleInputChange = () => {
    if (hasError) setHasError(false);
  };

  const handleRegister = async (data) => {
    setHasError(false);

    try {
      const response = await authService.register(data);
      singIn(response.token);
      navigate("/");
      setUserName(response.user.user_name);
    } catch (error) {
      if (error instanceof Error) {
        setMessageError(error.message);
        setHasError(true);
      }
    }
  };

  return { handleRegister, handleInputChange, hasError, messageError };
};
