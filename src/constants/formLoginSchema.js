import * as yup from 'yup';

const validateMessage = {
    emailValidate: 'please enter your email',
    passwordValidate: 'please enter your password',
}

export const loginFormSchema = yup.object({
    email: yup.string().required(validateMessage.emailValidate),
    password: yup.string().required(validateMessage.passwordValidate).min(6, 'Password must be greater than 6'),
})