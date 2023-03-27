import React from "react";
import { FieldProps, getIn } from "formik";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";

export const CheckBoxFormField: React.FC<
  FieldProps & {
    label: string;
  }
> = ({ field, form, label, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <FormControl error={!!errorText}>
      <FormControlLabel
        control={<Checkbox {...field} {...props} />}
        label={<Typography>{label}</Typography>}
      />
      {errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};
