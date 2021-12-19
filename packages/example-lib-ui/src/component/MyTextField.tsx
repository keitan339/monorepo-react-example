import { TextField, TextFieldProps } from "@mui/material";

export type MyTextFieldProps = TextFieldProps;

export const MyTextField = (props: MyTextFieldProps) => {
  return <TextField {...props} />;
};
