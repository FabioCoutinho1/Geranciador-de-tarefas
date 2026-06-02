import React from "react";
import AuthForm from "./AuthForm";

const RegisterUser = () => {
  return (
    <AuthForm
      title="Cadastro"
      subtitle="Crie sua conta para começar."
      buttonText="Cadastrar"
      footerText="Já possui cadastro?"
      footerLinkText="Entrar"
      footerLinkTo="/login"
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
    />
  );
};

export default RegisterUser;
