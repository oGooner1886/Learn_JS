// const myCity = {
//     city: 'New York',
//     cityGreeting() {
//         console.log('Greeeeeeetings!!!!!!!');
//     }
// }
// myCity.cityGreeting()


// const myCity1 = {
//     city: 'Las Vegas',
//     cityGood: function(){
//         console.log('Goooooooooooooooooooooooood!');
        
//     }
// }
// myCity1.cityGood() 

//! МУТАЦИЯ В JAVASCRIPT
// const person = {
//     name: 'Sergey',
//     age: 26,
// }
//TODO          const person2 = Object.assign({}, person)
// person2.age = 27
// console.log(person2.age);
//! 2 СПОСОБ
// const person = {
//         name: 'Sergey',
//         age: 26,
//     }
//TODO          const person2 = { ...person }
// person2.name = 'Alice'
// console.log(person2.name);
//! 3 СПОСОБ
// const person = {
//         name: 'Sergey',
//         age: 26,
//     }
//TODO          const person2 = JSON.parse(JSON.stringify(person))
// person2.name = 'Nika'
// console.log(person2.name);

//! ------------------FUNCTION----------------------------------
// let a = 5
// let b = 3
// let c
// c = a + b
// console.log(c);
// ! сделаем этот пример через функции
// let a = 5
// let b = 3
// function sum(a, b) {
//     const c = a + b
//     console.log(c);
// }
// sum(a, b) //!ВЫЗОВ ФУНКЦИИ
// a = 9
// sum(a, b)

// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// myFn(10, 3)

// const personOne = {
//     name: 'Bob',
//     age: 21,
// }
// function increasePersonAge(person){
//     const updatePerson = Object.assign({}, person)
//     updatePerson.age += 1
//     return updatePerson
// }
// const updatePersonOne = increasePersonAge(personOne)
// console.log(personOne.age);
// console.log(updatePersonOne.age);

//! CALLBACK FUNCTION
// function printMyName (){
//     console.log('Sergey')
// }
// setTimeout(printMyName, 1000)

//! ОБЛАСТИ ВИДИМОСТИ
// ГЛОБАЛЬНЫЕ и ЛОКАЛЬНЫЕ ПЕРЕМЕННЫЕ

// let a 
// let b 
// function myFn(params) {
//     let b 
//     a = true
//     b = 10
//     console.log(b);
    
// }
// myFn()
// console.log(a);
// console.log(b);

// const a = 5
// function myFn() {
//     function innerFn() {
//         console.log(a);
//     }
//     innerFn()
// }
// myFn()
// ! СТРОГИЙ РЕЖИМ - запрещает использовать необъявленные переменные 

// 'use strict'
//! ОПЕРАТОРЫ
// const button = {
//     width: 200,
//     text: 'Buy',
// }
// const redButton = {
//     ...button,           //? <=----копируем свойства у объекта button
//     color: 'red',
// }

// console.table(redButton)
// console.table(button)
//todo -----------------------
// const buttonInfo = {
//     text: 'buy', 
// }
// const buttonStyle = {
//     color: 'yellow',
//     width: 200,
//     height: 300,
// }
// const button = {
//     ...buttonInfo,
//     ...buttonStyle,
// }
// console.table(button)

// const name = 'Сергей'
// const city = 'Астрахань'
// const string = `Меня зовут ${name} и я живу в городе ${city}`
// console.log(string);

//! СТРЕЛОЧНЫЕ ФУНКЦИИ (это выражение и оно анонимное)
// (a, b) => {
//     let c 
//     a = a + 1
//     c = a + b
//     return c
// }

// const x = (value, multiplier = 1) => {
//     return value * multiplier
// }
// console.log(x(10, 3))
// console.log(x(10))

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })

// const firstPost = {
//     id: 1,
//     author: 'Sergey',
// }
// console.table(newPost(firstPost))
//! ВЫЛОВ ОШИБОК
// const fnWithError = () => {
//     throw new Error('Some error')
// }
// try {
// fnWithError()
// } catch (error) {
// console.error(error);
// console.log(error.message);

// }
// console.log('Continue...');
//! INSTRUCTION     инструкция может заканчива тся точкой с запятой, если закрывается фигурной скобкой, то не нужно
// let a;
// const b = 5;
// if (a > b) {
//     console.log('a is larger');
// }
// for (let i = 0; i++; i < 5) {
//     console.log(i);
    
// }
// function myFn(a) {
//     console.log(a);
// }
// const b = 3;
// let c = 10;
// myFn(2 + 3)
// myFn(b)
// myFn(c = c + 1)
//! ARRAY - МАССИВ
//?------------------
//! 1 Вариант 
// const myArray = [
//     1,
//     2,
//     3,
// ]
// console.log(myArray);
//! 2 Вариант
// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2)
                                    //todo myArray !== myArray2 т.к. разные ссылки у объектов
    //todo МЕТОДЫ МАССИВОВ
    //todo push, pop, shift, unshift, forEach, map
    //todo PUSH - добавляет элемент в конец массива
                //* const myArray = [1, 2, 3]
                //* myArray.push('zxc')
                //* console.log(myArray);
    //todo POP - удаляет элемент из конца массива
                //*  const myArray = [1, 2, 3]
                //*  myArray.pop()
                //*  console.log(myArray);
            //todo - можно добавить удаленный из конца массива элемент в другой массив
                //* const removedElement = myArray.pop()
                //* console.log(myArray);
                //* console.log(removedElement);
    //todo UNSHIFT - добавляет элемент в начало массива
                //*  const myArray = [1, 2, 3]
                //*  myArray.unshift('Sergey')
                //*  console.log(myArray);
    //todo SHIFT - удаляет первый элемент из начала массива
                //*  const myArray = [1, 2, 3]
                //*  myArray.shift()
                //*  console.log(myArray);            
            //todo - можно добавить удаленный из конца массива элемент в другой массив
                //* const removedElement = myArray.shift()
                //* console.log(myArray);
                //* console.log(removedElement);    
    //todo forEach - перебирает все элементы массива
                //*   const myArray = [1, 2, 3]
                //*   myArray.forEach(el =>  console.log(el * 2))   //! выводится 2 4 6 (каждый элемент умножается на 2)
                //*   console.log(myArray);                         //! оригинальный массив не изменился
    //todo MAP - перебирает все элементы массива и возвращает их в новый массив, при этом оригинальный массив не меняется
                //*  const myArray = [1, 2, 3]
                //*  const newArray = myArray.map(el => el * 3)     
                //*  console.log(newArray);
                //*  console.log(myArray);                          //! оригинальный массив не изменился
                
                //*  аналог стрелочной функции с явным объявлением
                //*  const newArray = myArray.map(function (el) {
                //*  return el * 3   
                //*  })
                 
    