let s1 = 96;
let s2 = 108;
let s3 = 89;
let k1 = 88;
let k2 = 91;
let k3 = 110;
let scoreDolphins = (s1 + s2 + s3) / 3;
let scoreKoalas = (k1 + k2 + k3) / 3;
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}