const userMap = new Map('name', 'lol',  'age', 30);

// userMap.set("name", ['lol']);
// userMap.set("age", 30);

// Получение итератора для элементов Map
const entriesIterator = userMap.entries();
    
// Итерирование по элементам Map с использованием итератора
for (const entry of entriesIterator) {
  console.log(entry); // Выводит массивы [ключ, значение]
}

userMap.forEach((value, key) => {
    let txt = ''
    txt += key + ' = ' + value
    console.log(txt);
});
console.log(userMap)

const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits)

  