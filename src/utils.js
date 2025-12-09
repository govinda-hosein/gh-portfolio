export function splitString(input) {
  const words = input.trim().split(/\s+/);
  if (words.length === 1) {
    return [words[0], ""];
  }

  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return [firstPart, lastWord];
}

export function extractFolder(filePath) {
  // Normalize path separators
  const normalizedPath = filePath.replace(/\\/g, "/");
  const parts = normalizedPath.split("/");
  // Remove the filename (last part) to get the full folder path
  return parts.slice(0, -1).join("/");
}

export function extractRelativeFolder(filePath, basePath = "./src/content") {
  const normalizedPath = filePath.replace(/\\/g, "/");
  const baseIndex = normalizedPath.indexOf(basePath);
  if (baseIndex !== -1) {
    const relativePath = normalizedPath.substring(baseIndex);
    const parts = relativePath.split("/");
    return parts.slice(0, -1).join("/"); // Remove filename
  }
  return extractFolder(filePath);
}
