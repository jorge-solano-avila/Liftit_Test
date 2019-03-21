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
      <label className="service-form__label">{label}</label>
      <br />
      <div>
        {type ? (
          <input className="service-form__input" {...input} type={type} />
        ) : (
          <textarea rows={5} className="service-form__textarea" {...input} />
        )}<br />
        {touched &&
          ((error && <span className="service-form__error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
      <br />
      <br />
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
        <button className="service-form__button" type="submit">Crear</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "service",
  validate
})(ServiceForm);
