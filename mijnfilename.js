//A
/*
const addTheWordCool = function(array) {
    array.push("cool");
    return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
//B
const amountOfElementsInArray = function(array) {
    return array.length;
};
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));
//c
const selectBelgiumFromBenelux = function(array) {
    return array[0];
};
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
//D
const lastElementInArray = function(array) {
    // return array[array.length - 1];
    return array.pop();
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
//e
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function(presidents) {
    const newpresident = presidents.slice(1, 4);
    console.log(presidents);
    return newpresident;
};
//const impeachTrumpSplice = function(array) {
// (...)
//}

console.log( impeachTrumpSlice( presidents ) ); // ["Obama", "Bush", "Clinton"]
//f*/
const stringsTogether = function(array) {
    return array.join(" ");
};
console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//g
const array = function(array1, array2) {
    return array1.concat(array2);
};
console.log(array([1, 2, 3], [4, 5, 6]));