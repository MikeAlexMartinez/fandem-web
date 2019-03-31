import * as emailValidator from "email-validator";

export default function validateEmail() {
  return email => (emailValidator.validate(email) ? null : "format");
}
