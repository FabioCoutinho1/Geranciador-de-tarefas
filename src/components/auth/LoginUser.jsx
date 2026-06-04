import React from "react";
import AuthForm from "./AuthForm";
import { useLogin } from "../../hooks/useLogin";

function LoginUser() {
  const { handleLogin, hasError, handleInputChange, messageError } = useLogin();

  return (
    <AuthForm
      title="Login"
      subtitle="Entre para organizar suas tarefas."
      buttonText="Entrar"
      footerText="Não possui cadastro?"
      footerLinkText="Cadastre-se"
      footerLinkTo="/register"
      fields={[
        {
          label: "Nome de usuário",
          name: "user_name",
          type: "text",
          placeholder: "Seu usuário",
        },
        {
          label: "Senha",
          name: "password",
          type: "password",
          placeholder: "Sua senha",
        },
      ]}
      isError={hasError}
      onSubmit={handleLogin}
      onInputChange={handleInputChange}
      messgeError={messageError}
    />
  );
}

export default LoginUser;
