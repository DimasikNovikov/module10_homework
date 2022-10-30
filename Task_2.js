// Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

// Примечание: в этом задании использовать promt не нужно.

let x;

console.log("x = "+ x);
console.log("Тип x не определён");

x=5;
console.log("x = "+ x);
console.log("x - " + typeof(x));

x="Hello, world!";
console.log("x = "+ x);
console.log("x - " + typeof(x));

x=true;
console.log("x = "+ x);
console.log("x - " + typeof(x));

x=undefined;
console.log("x = "+ x);
console.log("x - " + typeof(x));