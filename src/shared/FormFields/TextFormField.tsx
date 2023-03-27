import React from "react";
import { FieldProps, getIn } from "formik";
import { TextField } from "@mui/material";

export const TextFormField: React.FC<
  FieldProps & {
    label?: string;
    required?: boolean;
  }
> = ({ field, form, label, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <TextField
      fullWidth
      id={field.name}
      error={!!errorText}
      label={label}
      helperText={errorText}
      {...field}
      {...props}
      sx={{ marginBottom: 2 }}
    />
  );
};
