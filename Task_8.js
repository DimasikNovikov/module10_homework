// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

let myMap = new Map();
myMap.set(1, "Dmitry");
myMap.set("age", 38);
myMap.set(true, "Yes");

for (let i of myMap.keys())
    console.log("Ключ - " + i + ", значение - " + myMap.get(i));