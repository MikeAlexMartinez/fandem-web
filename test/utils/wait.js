export default function wait(amount) {
  return new Promise(resolve => setTimeout(resolve, amount));
}
