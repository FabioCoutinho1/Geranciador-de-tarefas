import { useNavigate } from "react-router";
import { useAuth } from "./useAuth";
import { authService } from "../services/authService";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useLogin = () => {
  const { setUserName } = useContext(TaskContext);
  const navigate = useNavigate();
  const { singIn } = useAuth();

  const handleLogin = async (data) => {
    try {
      const response = await authService.login(data);
      singIn(response.token);
      navigate("/");
      setUserName(response.user.user_name);
    } catch (error) {
      showMsg(error.message, "error");
    }
  };

  return { handleLogin };
};
