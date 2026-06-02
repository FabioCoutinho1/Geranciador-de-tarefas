import React from "react";
import AuthForm from "./AuthForm";
import { useLogin } from "../../hooks/useLogin";

function LoginUser() {
  const { handleLogin } = useLogin();
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
      onSubmit={handleLogin}
    />
  );
}

export default LoginUser;
