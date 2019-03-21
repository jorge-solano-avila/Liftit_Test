import React, { InputHTMLAttributes } from "react";
import { Field, reduxForm, FormErrors } from "redux-form";

import "./styles.scss";

interface RenderField {
  input: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  type: string;
  meta: {
    touched: boolean;
    error: boolean;
    warning: boolean;
  };
}

const validate = (values: any): FormErrors<any, string> => {
  const errors: FormErrors<any, string> = {};
  const { email, password } = values;

  if (!email) {
    errors.email = "Debes ingresar un correo";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Debes ingresar un correo válido";
  } else if (email.length > 255) {
    errors.email = "El correo debe tener máximo 255 caracteres";
  }

  if (!password) {
    errors.password = "Debes ingresar una contraseña";
  } else if (password.length < 8) {
    errors.password = "La contraseña debe tener mínimo 8 caracteres";
  } else if (password.length > 255) {
    errors.password = "La contraseña debe tener máximo 255 caracteres";
  }

  return errors;
};

const renderField = (field: RenderField): JSX.Element => {
  const {
    label,
    input,
    type,
    meta: { touched, error, warning }
  } = field;

  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

let LogInForm = (props: any) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        component={renderField}
        type="text"
        label="Correo electrónico"
      />
      <Field
        name="password"
        component={renderField}
        type="password"
        label="Contraseña"
      />
      <div>
        <button type="submit">Ingresar</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "logIn",
  validate
})(LogInForm);
