export default function validatePassword(minLength) {
  return string => (string.length >= minLength ? null : "format");
}
