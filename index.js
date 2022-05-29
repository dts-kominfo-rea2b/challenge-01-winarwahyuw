// TODO: Buatlah data dari kedua user di sini
const dataFavColorFirstUser = ["Yellow", "Pink", "White", "Purple"];
const dataFavColorSecondUser = ["Blue","Black","Grey"];

//buat variable set untuk fav color karena harus unik
const favColorFirstUser = new Set(dataFavColorFirstUser);
const favColorSecondUser = new Set(dataFavColorSecondUser);

const isHavePet = "Yes";

//buat class 
function Education (name, city, graduate){
    this.name = name,
    this.city = city,
    this.graduate = graduate
}

//data education FirstUser
const sdFirstUser = new Education("SD 01", "Jakarta", "2016");
const smpFirstUser = new Education("SMP 02", "Jakarta", "2019");
const smaFirstUser = new Education("SMA 03", "Tangerang", "");

//data education SecondUSer
const sdSecondUser = new Education("SD 02", "Jakarta", "2010");
const smpSecondUser = new Education("SMP 03","Bogor","2013");
const smaSecondUser = new Education("SMA 01", "Surabaya", "2016");
const univSecondUser = new Education("Universitas Maju","Tangerang","");

const educationFirstUser = [];
educationFirstUser.push(sdFirstUser);
educationFirstUser.push(smpFirstUser);
educationFirstUser.push(smaFirstUser);

const educationSecondUser = [];
educationSecondUser.push(sdSecondUser);
educationSecondUser.push(smpSecondUser);
educationSecondUser.push(smaSecondUser);
educationSecondUser.push(univSecondUser);

//variable set untuk fav restaurant karena harus unik
const dataRestoFirstUser = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];
const dataRestoSecondUser = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];

const restoFirstUser = new Set(dataRestoFirstUser);
const restoSecondUser = new Set(dataRestoSecondUser);

// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : Array.from(favColorFirstUser),
    isHavePet : Boolean(isHavePet),
    education : educationFirstUser,
    favoriteRestaurant : Array.from(restoFirstUser)
};
const secondUser = {
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : Array.from(favColorSecondUser),
    isHavePet : Boolean(!isHavePet),
    education : educationSecondUser,
    favoriteRestaurant : Array.from(restoSecondUser)
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};