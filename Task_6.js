// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = ["char","char","char"];
let i = 1;

while ((i < arr.length) && (arr[0] === arr[i]))
{
    i++;
}

if (i === (arr.length)) 
    console.log(true);
else
    console.log(false);    