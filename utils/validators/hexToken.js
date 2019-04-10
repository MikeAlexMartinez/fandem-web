export default function validateHexToken(hexLength) {
  const regex = new RegExp(`[0-9A-Fa-f]{${hexLength}}`, "g");
  return value => (regex.test(value) || value.length === 0 ? null : "format");
}
