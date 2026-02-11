function countVowels(text) {
  let count = 0;
  const lowerCase = text.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {
    if (
      lowerCase[i] === "a" ||
      lowerCase[i] === "e" ||
      lowerCase[i] === "i" ||
      lowerCase[i] === "o" ||
      lowerCase[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
