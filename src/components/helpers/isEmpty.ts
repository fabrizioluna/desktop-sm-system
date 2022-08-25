
// This function validate if the text are not empty.
export default function isEmpty(text: String) {
  console.log(text)
  return text.trim().length >= 0 && !undefined;
}
