// TASK C

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  getVaqt() {
    const now = new Date();
    const soat = String(now.getHours()).padStart(2, "0");
    const minut = String(now.getMinutes()).padStart(2, "0");
    return `${soat}:${minut}`;
  }

  qoldiq() {
    const vaqt = this.getVaqt();
    console.log(
      `Hozir ${vaqt}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud!`,
    );
  }

  sotish(mahsulot, miqdor) {
    if (mahsulot === "non") {
      this.non -= miqdor;
    } else if (mahsulot === "lagmon") {
      this.lagmon -= miqdor;
    } else if (mahsulot === "cola") {
      this.cola -= miqdor;
    }
  }

  qabul(mahsulot, miqdor) {
    if (mahsulot === "non") {
      this.non += miqdor;
    } else if (mahsulot === "lagmon") {
      this.lagmon += miqdor;
    } else if (mahsulot === "cola") {
      this.cola += miqdor;
    }
  }
}

const shop = new Shop(4, 5, 2);
const result = new Shop(2, 5, 6);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();
result.qoldiq();

// TASK B

// const count_numbers = (str) => {
//   let count = 0;
//   let i = 0;

//   while (i < str.length) {
//     let char = str[i];

//     if (char >= "0" && char <= "9") {
//       count++;
//     }

//     i++;
//   }

//   return count;
// };

// const test_strings = [
//   "ad2a54y79wet0sfgb9",
//   "test123code456",
//   "hello99world00",
//   "hello1MITA7andMIT8",
// ];

// test_strings.forEach((str) => {
//   console.log(`"${str}" ichidagi raqamlar soni:`, count_numbers(str));
// });

// *************************************************************************************************

// TASK A

// const list = [
//   "Bu so'zda 2 marta va undan ko'p ishlatilgan!",
//   "Bu so'zda 1 marta ishlatilgan!",
//   "Xato, faqat so'z kiriting!",
// ];

// char_count = (word) => {
//   if (typeof word !== 'string') {
//     console.log(list[2]);
//   } else {
//     let obj = {};
//     for (let i = 0; i < word.length; i++) {
//       if (obj[word[i]]) {
//         obj[word[i]] = obj[word[i]] + 1;
//       } else {
//         obj[word[i]] = 1;
//       }
//     }

//     for (let harf in obj) {
//       if (obj[harf] >= 2) {
//         console.log(harf, obj[harf], list[0]);
//       } else {
//         console.log(harf, obj[harf], list[1]);
//       }
//     }
//   }
// };

// char_count('apple');
// console.log('***********************************************');
// char_count('address');
// console.log('***********************************************');
// char_count('mississippi');
// console.log('***********************************************');
// char_count('infraztuzilma');
