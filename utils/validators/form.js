function validateForm(fields) {
  return Object.keys(fields).every(key => {
    const field = fields[key];
    return field.valid;
  });
}

export default validateForm;
