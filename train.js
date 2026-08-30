const list = [
  "2 ta va undan ko'p bir xil harf qatnashgan!",
  "So'zda faqat 1 ta harf bor!",
  "Xato, faqat so'z kiriting!",
];

char_count = (word, count) => {
  if (typeof word !== 'string') {
    console.log(list[2]);
  } else {
    let obj = {};
    for (let i = 0; i < word.length; i++) {
      if (obj[word[i]]) {
        obj[word[i]] = obj[word[i]] + 1;
      } else {
        obj[word[i]] = 1;
      }
    }

    for (let harf in obj) {
      if (obj[harf] >= count) {
        console.log(harf, obj[harf], list[0]);
      } else {
        console.log(harf, obj[harf], list[1]);
      }
    }
  }
};

char_count('success', 2);
console.log('***********************************************');
char_count('address', 2);
