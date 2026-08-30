console.log('Jack Ma maslahatlari!');
const list = [
  "Yaxshi talaba bo'ling!", // 0-20
  "To'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
  "O'zingiz uchun ishlashni boshlang!", // 30-40
  "O'zingizni kuchli his qilgan ishlarni qiling!", // 40-50
  'Yoshlarga investetsiya kiriting!', // 50-60
  'Endi dam olavering foydasi yuq!', // 60 **********
];

// CallBack Functions
// function maslahatBering(a, callback) {
//   if (typeof a !== 'number') callback('Insert a number', null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log('Passed here 0');
// maslahatBering(65, (err, data) => {
//   if (err) console.log('ERROR:', err);
//   console.log('Result:', data);
// });
// console.log('Passed here 1');

// Async Functions
async function maslahatBering(a) {
  if (typeof a !== 'number') throw new Error('Insert a number');
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[5];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 1000);
    });
    // setTimeout(function () {
    //   return list[5];
    // }, 5000);
  }
}
// call via then & catch
// console.log('Passed here 0');
// maslahatBering(25)
//   .then((data) => {
//     console.log('Result:', data);
//   })
//   .catch((err) => {
//     console.log('ERROR:', err);
//   });
// console.log('Passed here 1');

async function run() {
  let result = await maslahatBering(65);
  console.log(result);
  result = await maslahatBering(31);
  console.log(result);
  result = await maslahatBering(41);
  console.log(result);
}

run();
