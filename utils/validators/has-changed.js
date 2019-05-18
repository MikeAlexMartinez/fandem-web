export default function(formFields) {
  return Object.keys(formFields).some(key => {
    const field = formFields[key];
    return field.startValue !== field.value;
  });
}
