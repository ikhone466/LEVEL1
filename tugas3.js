//ini komen satu baris
/* Tipe data javascript adalah 
Number adalah tipe data Angka Number ini tipe data yang digunakan untuk menunjukan angka, 
baik positif maupun negatif

Integer Tipe data ini mirip dengan number hanya saja tipe data ini lebih 
digunakan saat akan menggunakan bilangan bulat, baik untuk bilangan negatif atau positif

Float Tipe data float ini merupakan tipe data yang juga bagian dari number. 
Tipe data ini biasa digunakan saat akan menggunakan angka yang merupakan bilangan desimal seperti 2.13 atau 0.4

Boolean merupakan tipe data yang hanya akan membuat dua nilai yaitu true atau false 
Tipe data ini biasa di gunakan untuk pernyataan benar atau palsu seperti yes or no

Object Ini merupakan tipe data yang memungkinkan anda menggunakan tipe data lain di dalamnya
Tipe data ini akan berisi nilai dari tipe data
Contoh penggunaan tipe data ini adalah dalam form formulir dimana mungkin akan ada nilai dari tipe data lain di situ.

Array Tipe data ini Array merupakan tipe data yang digunakan untuk menyimpan banyak nilai 
pada satu variabel 
Setiap nilai atau pada tipe data ini disebut elemen akan memiliki posisi sendiri yang disebut indeks
Tipe data ini banyak menyimpan data seperti data string dan number

Null Null yang merupakan tipe data dan null juga sebuah nilai. 
Tipe data ini hanya bernilai null. Meskipun nilai null yang terbilang tidak memiliki nilainya.

Undefined merupakan tipe datanya yang spesial hanya memiliki nilai undefined. 
Jenis tipenya bisa terbentuk pada suatu variabel yang tidak memiliki nilainya.
Variable sudah dideklarasi namun tidak ada nilainya di dalam atau tidak diinisialisasi.

NaN Tipe data JavaScript NaN atau Not a Number digunakan untuk merepresentasikan sebuah kesalahan. 
Kesalahan dalam penghitungan, hal itu terjadi karena perbedaan tipe data. 
Seperti halnya string dengan number. 
Proses aritmatika yang salah, sebuah string tidak dapat dihitung dengan numbernya.

Symbol Tipe data symbol yang merupakan tipe data baru 
setelah kehadiran ECMAScript 6 (ES6). Tipe data simbol yang digunakan sebagai pengenal 
properti objeknya.
*/

// Tipe data javaScript ( string )
const namaDepan = "Ikhwanda";
const namaBelakang = "Pratama";
let alamat = "jln Wijaya kusuma Pasar D1 Ketahun";

// Tipe data Number 
let umur = 21;

//Tipe Data Float
let tinggiBadan = 179.1;

//Tipe data Boolean
let benar = true;
let salah = false;

//Tipe data Array 
const hobi = ["basket", "nonton anime", "berenang"];

//Tipe data Object 
const date = new Date("2024-01-29");

//Null
const ada = null

// Tipe data NaN
const x = NaN

// Tipe data Undefined
const adaData = undefined

// angka pemjumlahan
const a = 20;
const b = 30;
// penjumlahan 
let total = a + b;
console.log(total);