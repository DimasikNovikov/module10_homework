// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let array = [5, "string", "c", true, 120];

console.log("Длина массива: " + array.length);
for(let i = 0; i < array.length; i++)
    console.log("Элемент " + (i+1) + ": " + array[i]);