import { useField } from "formik";
import React from "react";
import Form from "react-bootstrap/Form";

const Input = ({ label, id, type = "text", ...rest }) => {
  const [field, meta] = useField(id);
  const isError = meta.touched && meta.error;

  return (
    <Form.Group>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        isInvalid={isError}
        id={id}
        {...field}
        {...rest}
        type={type}
      />
      {isError && (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default Input;
