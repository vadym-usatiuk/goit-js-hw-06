// Задание 1
// Получить массив имен всех пользователей (поле name).

// const getUserNames = users => {
//   // твой код
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const users = [
  { name: "Moore Hensley" },
  { name: "Sharlene Bush" },
  { name: "Ross Vazquez" },
  { name: "Elma Head" },
  { name: "Carey Barr" },
  { name: "Blackburn Dotson" },
  { name: "Sheree Anthony" }
];

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]