import * as yup from "yup";

const validateMessage = {
  emailValidate: "please enter your email",
  passwordValidate: "please enter your password",
  nameValidate: "please enter your full name",
};

export const registerFormSchema = yup.object({
  email: yup.string().required(validateMessage.emailValidate),
  password: yup
    .string()
    .required(validateMessage.passwordValidate)
    .min(6, "Password must be greater than 6"),
  userName: yup.string().required(validateMessage.nameValidate),
});
