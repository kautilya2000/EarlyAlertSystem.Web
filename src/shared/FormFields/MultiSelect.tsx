import React from "react";
import { FieldProps, getIn } from "formik";
import { Checkbox, Autocomplete, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface Option {
  label: string;
  value: string;
}

const MultiSelect: React.FC<
  FieldProps & {
    label?: string;
    required?: boolean;
    options: Option[];
  }
> = ({ field, form, label, options, required, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      value={options.filter((option) => field.value.includes(option.value))}
      onChange={(event, value) => {
        if (value) {
          form.setFieldValue(
            field.name,
            value.map((option) => option.value)
          );
        }
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.label}
        </li>
      )}
      sx={{ minWidth: "100%", marginBottom: 2 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          required={required}
          error={!!errorText}
          helperText={errorText}
        />
      )}
    />
  );
};

export default MultiSelect;
