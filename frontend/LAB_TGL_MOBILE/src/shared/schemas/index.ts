import * as yup from 'yup';
import { baseSchemaName, baseSchemaEmail, baseSchemaPassword } from './default';

export const FormSignInSchema = yup.object().shape({
    email: baseSchemaEmail.email,
    password: yup.string()
    .required('Informe a sua senha')
    .matches(/^\w+[-#@&!]{0,}\w+$/g)
});

export const FormSignUpSchema = yup.object().shape({
    name: baseSchemaName.name,
    email: baseSchemaEmail.email,
    password: baseSchemaPassword.password
});

export const FormResetPasswordSchema = yup.object().shape({
    email: baseSchemaEmail.email
});

export const FormChangePasswordSchema = yup.object().shape({
    password: baseSchemaPassword.password,
    passwordConfirm: yup.string()
    .required('Confirme sua senha')
    .oneOf([yup.ref('password'), null], 'A confirmação da senha é diferente da senha escolhida')
});

export const FormUpdateAccount = yup.object().shape({
    name: baseSchemaName.name,
    email: baseSchemaEmail.email
});