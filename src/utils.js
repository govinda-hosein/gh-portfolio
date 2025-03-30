export function splitString(input) {
  const words = input.trim().split(/\s+/);
  if (words.length === 1) {
    return [words[0], ""];
  }

  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return [firstPart, lastWord];
}
