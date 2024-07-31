// Regular expression to match a word only if it is at the beginning of a string.

const regex = /^word/;
const texts = [
  "word is at the beginning",
  "this is not the word",
  "wordend",
  "word123",
  "word at the start",
];

texts.forEach((text) => {
  const match = text.match(regex);
  if (match) {
    console.log(`Matched: "${match[0]}" in text: "${text}"`);
  } else {
    console.log(`No match in text: "${text}"`);
  }
});

// Regular expression to match a word only if it is at the end of a string.

const regex1 = /word$/;
const texts1 = [
  "startword",
  "this is not the word",
  "wordend",
  "123word",
  "something at the end word",
];

texts1.forEach((text) => {
  const match1 = text.match(regex1);
  if (match1) {
    console.log(`Matched: "${match1[0]}" in text: "${text}"`);
  } else {
    console.log(`No match in text: "${text}"`);
  }
});
