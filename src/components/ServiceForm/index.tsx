import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Field, reduxForm, FormErrors } from "redux-form";

import "./styles.scss";

interface RenderField {
  input: any;
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
  const { description, sourceAddress, destinationAddress } = values;

  if (description && description.length > 10000) {
    errors.description = "La descripción debe tener máximo 10.000 caracteres";
  }

  if (!sourceAddress) {
    errors.sourceAddress = "Debes ingresar una dirección de origen";
  } else if (sourceAddress.length > 255) {
    errors.sourceAddress =
      "La dirección de origen debe tener máximo 255 caracteres";
  }

  if (!destinationAddress) {
    errors.destinationAddress = "Debes ingresar una dirección de destino";
  } else if (destinationAddress.length > 255) {
    errors.destinationAddress =
      "La dirección de destino debe tener máximo 255 caracteres";
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
        {type ? (
          <input {...input} placeholder={label} type={type} />
        ) : (
          <textarea {...input} placeholder={label} />
        )}
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

let ServiceForm = (props: any) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="description" component={renderField} label="Descripción" />
      <Field
        name="sourceAddress"
        component={renderField}
        type="text"
        label="Dirección de origen"
      />
      <Field
        name="destinationAddress"
        component={renderField}
        type="text"
        label="Dirección de destino"
      />
      <div>
        <button type="submit">Crear</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "service",
  validate
})(ServiceForm);
