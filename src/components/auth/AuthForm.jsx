import React from "react";
import { Link } from "react-router";

const AuthForm = ({
  title,
  subtitle,
  fields,
  buttonText,
  footerText,
  footerLinkText,
  footerLinkTo,
  isError,
  onSubmit,
  onInputChange,
  messgeError,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    onSubmit(data);
  };
  return (
    <div className="flex flex-1 items-center justify-center bg-[linear-gradient(rgba(12,10,9,0.58),rgba(12,10,9,0.74)),url(/src/assets/background.jpg)] bg-cover bg-center p-6 text-white">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-5 rounded-lg border border-white/10 bg-stone-950/75 p-6 shadow-2xl shadow-stone-950/60 backdrop-blur-md"
      >
        <div className="cursor-default">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-200">
            {title}
          </p>
          <h1 className="mt-2 text-3xl font-bold">{title}</h1>
          <p className="mt-1 text-sm text-stone-300">{subtitle}</p>
        </div>

        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-stone-200"
              htmlFor={field.name}
            >
              {field.label}
            </label>
            <input
              className={`h-11 rounded-md border bg-stone-800/90 px-3  outline-none transition placeholder:text-stone-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300/30 ${isError ? "border-red-500 text-red-500" : "text-white border-white/10"}`}
              type={field.type}
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              onChange={onInputChange}
            />
            {isError && <p className="text-xs text-red-400">{messgeError}</p>}
          </div>
        ))}

        <button
          className="mt-1 h-11 cursor-pointer rounded-md bg-blue-400 px-4 py-2 font-bold text-blue-950 transition hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-stone-950"
          type="submit"
        >
          {buttonText}
        </button>
        <p className="text-center text-sm text-stone-300">
          {footerText}{" "}
          <Link
            className="font-bold text-blue-200 transition hover:text-white"
            to={footerLinkTo}
          >
            {footerLinkText}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
