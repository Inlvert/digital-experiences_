import * as yup from "yup";

export const NAME_SCHEMA = yup.string().matches(/^[A-Z][a-z]{0,64}$/);

export const USER_SCHEMA = yup.object({
  name: NAME_SCHEMA,
  surName: NAME_SCHEMA,
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&]).{8,32}$/, 'passwprd must have 1 Upper abd lowecase latter')
    .required(),
  industry: yup.string(),
  massage: yup.string(),
});