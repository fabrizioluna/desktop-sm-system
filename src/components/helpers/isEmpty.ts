// This function validate if the text are not empty.
export default function isEmpty(text: String) {
  if (text === undefined) return false;
  return text.trim().length >= 1 && text !== undefined;
}
