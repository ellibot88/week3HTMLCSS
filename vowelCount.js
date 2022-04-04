//Return true if the word has more vowels than consonants (abi should return true)

let vowelCount = (word) => {
  let vowelArr = ["a", "e", "i", "o", "u"];
  let vowel = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowelArr.length; j++) {
      if (word[i] === vowelArr[j]) {
        vowel++;
      }
    }
  }
  if (vowel > word.length - vowel) {
    return true;
  } else {
    return false;
  }
};

console.log(vowelCount("abi"));
console.log(vowelCount("Elliott"));
