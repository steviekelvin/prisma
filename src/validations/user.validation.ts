import * as yup from "yup";

export const userValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  phone: yup.string().nonNullable(),
});

export const userFindIdValidation = yup.object({
  id: yup.string().required(),
});
