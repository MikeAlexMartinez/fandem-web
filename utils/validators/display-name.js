export default function validateDisplayName(length) {
  // matches alphanumeric characters, whitespace characters and hyphens
  return value => {
    const regex = new RegExp(`^[\\w\\-\\s\\']{1,${length}}$`, "g");
    if (value.length > 40) {
      return "length";
    }
    if (!regex.test(value)) {
      return "format";
    }
    return null;
  };
}
