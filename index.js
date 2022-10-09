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
                 
    //! ДЕСТРУКТУРИЗАЦИЯ - присвоение некоторых свойств объекта новым переменным
    // const userProfile = {
    //     name: 'Sergey',
    //     commentsQty: 23,
    //     hasSignedAgreement: false,
    // }
    // const { name, commentsQty } = userProfile   //? Объявление новых переменных и присваивание значений на основе значений свойств объекта
    // const { hasSignedAgreement } = userProfile

    // console.log(name);
    // console.log(commentsQty);


    //todo - деструктуризация массива
    // const fruits = ['Apple', 'Banana', 'zxc']
    // const [fruitOne, fruitTwo, asdasdasd] = fruits
    // console.log(fruitOne);
    // console.log(fruitTwo);
    //todo - деструктуризация в функциях

    //* const userProfile = {
    //*     name: 'Sergey',
    //*     commentsQty: 23,
    //*    hasSignedAgreement: false,
    //* }
    //* const userInfo = ({ name, commentsQty }) => {
    //*     if (!commentsQty) {
    //*        return `User ${name} has no comments` 
    //*    }
    //*     return `User ${name} has ${commentsQty} comments`
    //*}
    //*userInfo(userProfile)
    
    //! - УСЛОВНЫЕ ИНСТРУКЦИИ - if, if else, switch, тернарный оператор
    
    //todo - IF

    //* if(условие) {   
    //* }

        //* let val = 10
        //* if (val < 5) {
        //*     val += 20
        //* }
        //* console.log(val); //вывод 30


            //* const person = {
            //*     age: 20,
            //* }
            //* if (!person.name) {
            //*     console.log('Имя не указано');
            //* } 
    
    //todo - IF ELSE

    //* if(условие) {   
    //* } else {
    //* }

        //* let val = 10
        //* if (val < 5) {
        //*     val += 20
        //* } else {
        //*     val -= 20
        //* }
        //* console.log(val);


    //todo - IF ELSE IF

    //* if(условие 1) {   
    //* } else if(условие 2) {
    //* } else {
    //* }
        //! Первый вариант
        //* const age = 25
        //* if (age > 18) {
        //*     console.log('is adult');
        //* } else if (age >= 12) {
        //*     console.log('is teenager');
        //* } else {
        //*     console.log('is child');
        //* }
        //         //! Второй вариант
        //*         if (age >= 18) {
        //*             console.log('is adult');
        //*         } 
        //*         if (age >= 12 && age < 18) {
        //*             console.log('is teenager');
        //*         }
        //*         if (age < 12) {
        //*             console.log('is child');
        //*         }

        //! ИСПОЛЬЗОВАНИЕ IF В ФУНКЦИЯХ
                // const sumPositiveNumbers = (a, b) => {
                //     if (typeof a !== 'number' || typeof b !== 'number') {   //? если передали не "число" для параметров a или b
                //         return 'One of the arguments is not a number'       //? мы возвращаем эту строку
                //     }
                //     if (a <= 0 || b <= 0) {                                 //? если число не положительное
                //         return 'Numbers are not positive'                   //? возвращаем эту строку
                //     }
                //     return a + b
                // }
        
     //todo - SWITCH
        //* switch (выражение){
        //*     case A:
        //*         //? действия если выражение === A
        //*         break
        //*     case B:
        //         //? действия если выражение === B
        //*         break
        //*     default:
        //         //? действия по умолчанию
        //* }
            //! Пример 
                //* const month = 2

                //* switch (month) {
                //*     case 12:
                //*         console.log('Декабрь');
                //*         break
                //*     case 1:
                //*         console.log('Январь');
                //*         break
                //*     case 2:
                //*         console.log('Февраль');
                //*         break
                //*     default:
                //*         console.log('Это не зимний месяц');
                //* }

//-----------------------------------------------------------------------------------------
    //! - ТЕРНАРНЫЙ ОПЕРАТОР - три операнда
    //* Условие ? Выражение 1 : Выражение 2         

            //! Пример
                //* const value = 11
                //* value 
                //* ? console.log('Условие истино')
                //* : console.log('Условие ложно')
                

                    //* const value1 = 11
                    //* const value2 = 25

                    //* value1 && value2            //* и значение 1 и значение 2 должны быть тру
                    //* ? myFunction1(value1, value2)
                    //* : myFunction2()


                        //* let value = 11
                        //* console.log(value >= 0 ? value : -value);           //* если value >= 0, если тру то выполняется первое, если фолс второе

                        //* value = -5
                        //* const res = value >= 0 ? value : -value
                        //* console.log(res);

//-----------------------------------------------------------------------------------------                        
    //! ЦИКЛЫ   -   for, for in, while, do while, for of

        //todo - FOR (не рекомендуется использовать для массивов, ЛУЧШЕ ИСПОЛЬЗОВАТЬ ФУНКЦИИ ВЫСШЕГО ПОРЯДКА - forEach, map, reduce)

        //! ПРИМЕР 1

            //* for(начальная инструкция; Условие; Итерационное действие){
                //*     //блок кода выполняемый на каждой итерации
                //* }
                
            //* for(let i = 0; i < 5; i++){
            //*     console.log(i);
                
            //* }

            //! ПРИМЕР 2
        //? (1 - через цикл for) 
            //* const myArray = ['first', 'second', 'third']

            //* for (let i = 0; i < myArray.length; i++) {
            //*     console.log(myArray[i]);
            //* }
        //? (2 - через forEach) 
            //* const myArray = ['first', 'second', 'third']
            //* myArray.forEach((element, index) => {
            //*     console.log(element, index);
                
            //* })

//todo - FOR (не рекомендуется использовать для массивов, ЛУЧШЕ ИСПОЛЬЗОВАТЬ ФУНКЦИИ ВЫСШЕГО ПОРЯДКА - forEach, map, reduce)

        //! ПРИМЕР 1

            //* for(начальная инструкция; Условие; Итерационное действие){
                //*     //блок кода выполняемый на каждой итерации
                //* }
                
            //* for(let i = 0; i < 5; i++){
            //*     console.log(i);
                
            //* }

            //! ПРИМЕР 2
        //? (1 - через цикл for) 
            //* const myArray = ['first', 'second', 'third']

            //* for (let i = 0; i < myArray.length; i++) {
            //*     console.log(myArray[i]);
            //* }
        //? (2 - через forEach) 
            //* const myArray = ['first', 'second', 'third']
            //* myArray.forEach((element, index) => {
            //*     console.log(element, index);
                
            //* })
        
//todo - WHILE ()

        //! ПРИМЕР 1

            //* while(Условие){                                     // если в условии false, цикл не выполняется
                //*     //блок кода выполняемый на каждой итерации
                //* }
                
            //* let i = 0
            //* while (i < 5) {
            //*     console.log(i);
            //*     i++
                
            //* }

           
//todo - DO WHILE ()    -   когда хотим выполнить блок кода, хотя бы один раз

        //! ПРИМЕР 1

            //* do {                                     
                //*     //блок кода выполняемый на каждой итерации
                //* } while(Условие)
                
                //* let i = 0
                //* do {
                //*     console.log(i)
                //*    i++
                //* } while (i < 5)    
        
                //*         let z = 10
                //*         do {
                //*            console.log(z)
                //*             z++
                //*         } while (z < 5)

//todo - FOR IN - ПЕРЕБОР ВСЕХ СВОЙСТВ ОБЪЕКТА

        //! ПРИМЕР 1

            //* for (key in Object) {
                //действия с каждым свойством объекта
                //значение свойства - Object[key]
            //* } 
                
                //* const myObject = {
                //*     x: 10,
                //*     y: true,
                //*     z: 'abc'
                //* }

                // 1 вариант
                //* for (const key in myObject) {
                //*     console.log(key, myObject[key]);
                //* }

                // 2 вариант
                //* Object.keys(myObject).forEach(key => {          // O.k(mO) - получает все ключи объекта в виде массива
                //*     console.log(key, myObject[key]);
                    
                //* })

                // 3 вариант
                //* Object.values(myObject).forEach(value => {          // O.k(mO) - получает все значения свойств объекта в виде массива
                //*     console.log(value);
                    
                //* })

                // 4 вариант - FOR IN для массивов

                //* const myArray = [true, 10, 'abc', null]

                //* for (const key in myArray) {
                //*     console.log(myArray[key]);
                    
                //* }

//todo - FOR OF (не для объектов)
//! ПРИМЕР 1

    //* for (Element of Iterable) {
    //действия с определенным элементом
    //* }

    //* const myString = 'Hey'
    //* for (const letter of myString) {
    //*     console.log(letter);    // вывод H E Y (в столбик)
    //* }

    //! Пример 2, вариант 1
    //* const myArray = [true, 10, 'abc', null]
    //* for (const element of myArray) {
    //*     console.log(element);
    //* }
    //! Пример 2, вариант 2 для массива
    //* const myArray2 = [true, 10, 'abc', null]
    //* myArray2.forEach(element => {
    //*     console.log(element);
    //* })


//-----------------------------------------------------------------------------------------
//! МОДУЛИ - позволяют структурировать код

import printMyName from './index2.js'
printMyName()


 