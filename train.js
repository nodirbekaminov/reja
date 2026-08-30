const list = [
  "Bu so'zda 2 marta va undan ko'p ishlatilgan!",
  "Bu so'zda 1 marta ishlatilgan!",
  "Xato, faqat so'z kiriting!",
];

char_count = (word) => {
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
      if (obj[harf] >= 2) {
        console.log(harf, obj[harf], list[0]);
      } else {
        console.log(harf, obj[harf], list[1]);
      }
    }
  }
};

char_count('apple');
console.log('***********************************************');
char_count('address');
console.log('***********************************************');
char_count('mississippi');
console.log('***********************************************');
char_count('infraztuzilma');
