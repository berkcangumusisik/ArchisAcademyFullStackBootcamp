const incrementBasligi = (document.getElementById("counter-el").innerHTML =
  "5");
const previousEntries = document.getElementById("save-el");

// Değişkenler
let firstNumber = 5; // let değiştirilebilir değişkenlerdir.
firstNumber = 6;

const secondNumber = 4; // Sonradan değiştirilemez
//secondNumber = 12; // Hata verir

/**
 * let : ES6 ile tan introduit bir değişken tanımlama anahtar kelimesidir. let ile tanımlanan bir değişken, blok kapsamına sahiptir. Bu, değişkenin yalnızca tanımlandığı blok içinde erişilebilir olduğu anlamına gelir.

let y = 10;

* const: ES6 ile tanıtılan bir diğer değişken tanımlama anahtar kelimesidir. const ile tanımlanan bir değişken, sabit bir değer atanır ve değeri sonradan değiştirilemez. const ile tanımlanan değişkenler blok kapsamına sahiptir.

const PI = 3.14;
 */

// Matematiksel İşlemler
let x = 5 + 5; // 10
let y = 5 - 5; // 0
let z = 5 * 5; // 25
let t = 5 / 5; // 1
let u = 5 % 5; // 0 mod alma işlemi

let ilkSayi = 0;
// Fonksiyonlar
function increment() {
  ilkSayi += 1;
  document.getElementById("counter-el").innerHTML = ilkSayi;
  document.getElementById("counter-el").style.backgroundColor = "red";
}

function save() {
  let girisStr = ilkSayi + "-";
  previousEntries.innerHTML += girisStr;
  incrementBasligi.innerText = 0;
  ilkSayi = 0;
}
// Scope
/**
 Global Kapsam (Global Scope): Bir değişken, herhangi bir fonksiyon veya blok içinde değilse, global kapsamda tanımlanmış demektir. Bir değişkeni global kapsamda tanımladığınızda, bu değişkene her yerden erişilebilir.

Fonksiyon Kapsamı (Function Scope): Bir değişken, bir fonksiyon içinde tanımlanmışsa, bu değişken fonksiyon kapsamında tanımlanmış demektir. Bu durumda, değişkene sadece tanımlandığı fonksiyon içinde erişilebilir.

Block Kapsamı (Block Scope): ES6 ile tanıtılan let ve const anahtar kelimeleri ile tanımlanan değişkenler, blok kapsamına sahiptir. Bu, değişkenin yalnızca tanımlandığı blok içinde erişilebilir olduğu anlamına gelir.
 */

/**
 * İşte bazı yaygın kullanılan JavaScript eventleri:

click: Bir öğeye tıklandığında tetiklenir.
mouseover: Fare bir öğenin üzerine geldiğinde tetiklenir.
keydown: Bir tuşa basıldığında tetiklenir.
submit: Bir form gönderildiğinde tetiklenir.
load: Bir sayfa veya bir öğe tamamen yüklendiğinde tetiklenir.
scroll: Bir sayfa kaydırıldığında tetiklenir.
change: Bir form elemanının değeri değiştiğinde tetiklenir.
mouseenter: Fare bir öğenin üzerine geldiğinde tetiklenir.
mouseleave: Fare bir öğenin üzerinden ayrıldığında tetiklenir.
 */
