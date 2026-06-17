import React from "react";
import AuthForm from "./AuthForm";
import { useRegister } from "../../hooks/useRegister";

const RegisterUser = () => {
  const { handleRegister,  handleInputChange, hasError, messageError } = useRegister();
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
          name: "userName",
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
      onSubmit={handleRegister}
      onInputChange={handleInputChange}
      messgeError={messageError}
    />
  );
};

export default RegisterUser;
