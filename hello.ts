// function sayHello(person: string) {
//     return 'Hello, ' + person;
// }
// let user = '123';
// console.log(sayHello(user));
// interface Foo {
//     bar: number;
//     bas: string;
// }
// const foo = {} as Foo;
// foo.bar = 123
// foo.bas = "123"
// const too = {} as Foo;
// too.bar = 456
// too.bas = "456"
// const age: number = 32
// function display1(name: string) {
//     console.log(name);
// }
// function display(a: number, b: number): number {
//     const c = a + b
//     console.log(c);
//     return c
// }
// display(1, 2)
// display1('123')

// let num: number
// let str: string
// //strictNullChecks 要是 false才行
// num = undefined
// str = null

//strictNullChecks 是 true時
//使用複合型別告訴編譯器哪些變數可以是空值
// type User ={
//     firstName:string;
//     //聯合型別(Union Types) "|" , 交集型別(Intersection Types) "&"
//     lastName:string | undefined;
// }
// let leo: User = { firstName: "Leo", lastName:undefined}
// console.log(leo);

//bas 參數可有可無，就算沒有傳入
// function foo(bar: number, bas?: string){
//     console.log(bar, bas);
// }
// foo(123)

// function foo(bar: number, bas: string = 'hello'){
//     console.log(bar, bas);
// }
//foo(123)//123 hello
// foo(123,"leo")//123 leo

// //剩餘參數(rest parameters)
// function foo(firstName: string, ...restOfname: string[]){
//     return firstName + ' ' + restOfname.join(' ');
// }
// let a= foo('a','b','c','d','e')
// console.log(a);

// //重載
// function add(a:string, b:string):string;
// function add(a:number, b:number): number;
// function add(a: any, b:any): any {
//     return console.log(a + b);
// }
// add("hello ", "Kira"); // "hello Kira" 
// add(1, 2); //  3 

// let foo = [1,[2],{a:4}] //let foo: (number | number[] | {a: number;})[]
// let numbers = [1,2,3,4]

//enum Days { Sun, Mon, Tue, Wed, Thu, Fir, Sat }

// console.log(Days);
// {
//     '0': 'Sun',
//     '1': 'Mon',
//     '2': 'Tue',
//     '3': 'Wed',
//     '5': 'Fir',
//     '6': 'Sat',
//     Sun: 0,
//     Mon: 1,
//     Tue: 2,
//     Wed: 3,
//     Thu: 4,
//     Fir: 5,
//     Sat: 6
//   }

// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = 0 ,
//     Right ,
//   }
//   console.log(Direction);
//   {
//     '0': 'Left',
//     '1': 'Right',
//     Up: 'UP',
//     Down: 'DOWN',
//     Left: 0,
//     Right: 1
//   }
  
// const enum Direction {
//     Up = 4,
//     Down ,
//     Left ,
//     Right ,
//   }
//   let directions = Direction.Down;// let directions = 5 /* Down */;

// declare enum Directions {
//     Up = 1, 
//     Down, 
//     Left ,
//     Right
// }
// let directions = Directions.Up;// let directions = Directions.Up;

// declare const enum Directions {
//     Up = 1, 
//     Down, 
//     Left ,
//     Right
// }
// let directions = Directions.Up;//let directions = 1 /* Up */

// //約束取值只能是某幾個規定之一
// type EventNames = 'click' | 12 | false;
// function handleEvent(num: number, event: EventNames){
//     console.log("123");
// }
// handleEvent(12,12)

// //當新增越界的元素時，它的型別會被限制為元組中每個型別的聯合型別
// let tom: [string, number];
// tom = ['Tom', 25];
// tom.push('male');
// tom.push(true)//報錯
// console.log(tom);

// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// console.log(directions);

// class Animal {
//     constructor(name :string) {
//         this.name = name;
//     }
//     get name() {
//         return 'Jack';
//     }
//     set name(value) {
//         console.log('setter: ' + value);
//     }
// }
// let a = new Animal('Kitty'); // setter: Kitty
// a.name = 'Tom'; // setter: Tom
// console.log(a.name); //jack


//介面繼承類別
// class Point {
//     x: number;
//     y: number ;
// }
// interface Point3d extends Point {
//     z: number;
// }
// let point3d: Point3d = {x: 1, y: 2, z: 3};
console.log("1");
console.log("2");
console.log("3");
console.log("4");
