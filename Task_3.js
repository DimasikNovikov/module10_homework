/*Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

let str1="Hello, World!";
let str2="";
for(let i = str1.length - 1; i >= 0; i--)
    str2 += str1[i]; 
console.log(str2);
