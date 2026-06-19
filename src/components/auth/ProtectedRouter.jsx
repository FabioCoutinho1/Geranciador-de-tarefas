import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import {useTask} from "../../hooks/useTask"
import Login from "../../pages/Login";
import { useEffect } from "react";

export const ProtectedRouter = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const {loadTask} = useTask();

  // useEffect(async ( )=>{
  //   const validToken = await loadTask()

  //   console.log(validToken);
    
  // }, [])
  if (!isAuthenticated) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRouter;
