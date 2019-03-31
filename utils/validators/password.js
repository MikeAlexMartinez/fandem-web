function validatePassword(minLength) {
  return string => (string.length >= minLength ? null : "format");
}

function valuesMatch(comparisonField) {
  return (formFields, value) =>
    formFields[comparisonField].value !== value ? "mismatch" : null;
}

export default validatePassword;
export { valuesMatch };
