const numbers = [1,2,3,4,5]; 

const doubled = numbers.map((num) => {return num*2});

const filtered = numbers.filter((num)=> {return num>2});

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered:", filtered);

const names = ["Ali", "Ayşe", "Mehmet"];

const buyukHarf = names.map((ad)=> {return ad.toUpperCase()});
const dortHarf = names.filter((ad)=> {return ad.length>4});

console.log("Büyük harf:", buyukHarf);
console.log("Dört harften uzun isimler harf:", dortHarf);