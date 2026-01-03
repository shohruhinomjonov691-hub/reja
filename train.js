// MITTASK

/* C-TASK
* Savol: Shunday class tuzing tuzing nomi Shop,
va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning
3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop-qoldiq()
return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
shop. sotish( 'non', 3) & shop. qabul("cola', 4) & shop. qoldiq()
return hozir 20:50da lta non, 5ta lagmon va 6ta cola mavjud!
*/
/*Masalaning yechimi:
 */
// 1 -case:
const moment = require("moment");

const time = moment().format("HH:mm");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  sotish(s, b) {
    if (s !== "non" && s !== "cola" && s !== "lagmon") {
      console.log(`Bizda "${s}" mahsuloti mavjud emas !`);
    } else if (b > this.non && b > this.lagmon && b > this.cola) {
      console.log(`${b} son noto‘g‘ri / yetarli emas`);
    } else if (s === "non" && typeof b === "number" && b <= this.non) {
      this.non -= b;
      console.log(`Hozirda ${time} da : ${b} ta non sotildi!`);
    } else if (s === "lagmon" && typeof b === "number" && b <= this.lagmon) {
      this.lagmon -= b;
      console.log(`Hozirda ${time} da : ${b} ta lagmon sotildi!`);
    } else if (s === "cola" && typeof b === "number" && b <= this.cola) {
      this.cola -= b;
      console.log(`Hozirda ${time} da : ${b} ta cola sotildi!`);
    }
  }

  qabul(q, c) {
    if (q !== "non" && q !== "cola" && q !== "lagmon") {
      console.log(`Bizda "${q}" mahsuloti mavjud emas !`);
    } else if (typeof c !== "number" || c <= 0) {
      console.log(`${c} son noto‘g‘ri / yetarli emas`);
    } else if (q === "non" && typeof c === "number" && c >= 0) {
      this.non += c;
      console.log(`Hozirda ${time} da : ${c} ta non qabul qilindi!`);
    } else if (q === "lagmon" && typeof c === "number" && c >= 0) {
      this.lagmon += c;
      console.log(`Hozirda ${time} da : ${c} ta lagmon qabul qilindi!`);
    } else if (q === "cola" && typeof c === "number" && c >= 0) {
      this.cola += c;
      console.log(`Hozirda ${time} da : ${c} ta cola qabul qilindi!`);
    }
  }

  qoldiq() {
    console.log(
      `Hozir ${time} da : ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`
    );
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.qabul("non", 10);
shop.qabul("lagmon", 10);
shop.qabul("cola", 10);
////=========================
shop.sotish("non", 11);
shop.sotish("lagmon", 11);
shop.sotish("cola", 11);
shop.qoldiq();
///==========================
shop.qabul("cola", -5);
shop.sotish("lagmon", 5);
shop.qoldiq();

// Task-B
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
//MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
/*
function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      count++;
    }
  }
  return count;
}
console.log(countDigits("ad2a54y79we3t0sfgb9"));
*/
/* TASK A
Harf sifatida kiritilgan birinchi parametr, 
kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
Funktsiya tuzing

Masalan: countLetter("e", "engineer")
'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
3 sonini qaytaradi
*/
// A - TASK
// Masalani izohi
// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi ,
// letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:
/*
function countLetter(letter, word) {
  let number = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      number++;
    }
  }
  return number;
}
console.log(countLetter("e", "experience"));
*/
// ============================================================

// console.log("Jack Ma maslahatlari");
// const list = [
//   "Yahshi talaba boling", // 0-20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling (Xato qilishdan qo'rqmang)", // 20-30
//   "O'zingizni ishlaringizni boshlang", // 30-40
//   "Siz kuchli bolgan narsalardi qiling", // 40-50
//   "Yoshlarga investitsiya qiling", // 50-60
//   "Endi dam oling foydasi yoq endi", // 60
// ];
// // CALLBACK functions
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
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
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });
// console.log("passed here 1");

// ASYNC function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1]; //callback(null, list[1]);
//   else if (a > 30 && a <= 40) return list[2]; //callback(null, list[2]);
//   else if (a > 40 && a <= 50) return list[3]; //callback(null, list[3]);
//   else if (a > 50 && a <= 60) return list[4]; //callback(null, list[4]);
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }
// setTimeout(function () {
//   callback(null, list[5]);
// }, 5000);

// CALL via then/catch
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// CALL via async/await
// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(32);
//   console.log(javob);
//   javob = await maslahatBering(45);
//   console.log(javob);
// }
// run();

// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });
// console.log("passed here 1");
