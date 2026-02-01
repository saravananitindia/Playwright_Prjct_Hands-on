import {test,chromium} from '@playwright/test'

test('check variable', async({page})=>{
    let str = "Hello Playwright";
    let num = 42;
    let bool = true;
    let obj = {key:"value"};
    let arr=[1,2,3];
    let date = new Date();
    let regex = /abc/;
    
    console.log(typeof str);
    console.log(typeof num);
    console.log(typeof bool);
    console.log(typeof obj);
    console.log(typeof arr);
    console.log(date instanceof Date);
    console.log(regex instanceof RegExp);
    console.log(arr instanceof Array);
});

test('let example', async({page})=>{
    await page.goto("https://www.google.com");
});

test('loops', async({page})=>{
    let count =0;
    for(let i=0;i<=5;i++){
        count +=i;
    }
    console.log(count);

    for(let i=1;i<=5;i++)
        console.log(`For-Iteration ${i}`);

    for(var i=1;i<=5;i++);
    console.log(i);

    let j=1;
    while(j<=5){
        console.log(`While-Iteration ${j}`);
        j++;
    }

    let k=1;
    do{
         console.log(`Do-While-Iteration ${k}`);
        k++;
    }while(k<=5);
   
});

var globalVar='Global var';
test('test var', async({page})=>{
    var localVar='Local Var';
    console.log(globalVar);
    console.log(localVar);
    {
        var localVar='Local Var 2';
        var localVar2='Local Var 3';
        console.log(localVar); //O/p: Local Var 2
    }
     console.log(localVar2); //O/p: Local Var 3, if variable is declared by 'let' then it'll be error

     var test='abc';
     // let test='xyz'; -> Error
     console.log(test);
});

test('test const',async({page})=>{
    const txt='sample txt';
    //txt='sample data'; --> Error
    console.log(txt);
    const user={name:'bhuvi',age:30};
    console.log(user.age);
    user.age=35;
    console.log(user.age);
});

test('for..of vs for..in loops',async({page})=>{

    /*String, Array, TypedArray, Map, and Set are all built-in iterables, because each of their prototype objects 
    implements an @@iterator method. So, for...of loop works on the mentioned object types.
    Object in JavaScript is not iterable by default. So, for...of loop does not work on objects.*/

    const str = "Hello World";
    for(let element of str)
        console.log(element); //Prints each letter in one line

    const friuts=["apple","banana"];
    for(const friut of friuts)
        console.log(friut); //Prints each word in one line

    let anotherMap = new Map([
        ['name', 'GFG'],
        ['age', 30],
        ['city', 'Noida']
    ]);
    console.log(anotherMap.get('name'));

    for(const [key,value] of anotherMap)
        console.log(`Key is ${key}, Value is ${value}`);

    for(const entry of anotherMap)
        console.log(`Key is ${entry[0]}, Value is ${entry[1]}`);

    for(const key of anotherMap.keys())
        console.log(key);

    for(const value of anotherMap.values())
        console.log(value);

    /*for...in statement iterates over all enumerable properties of an object that are keyed by strings
    (ignoring ones keyed by Symbols), including inherited enumerable properties.
    for...in works with those properties whose enumerable flag is set to true.
    Enumerable flag for properties created via simple assignment or property initializer are by default true.
    Enumerable flag for properties created via Object.defineProperty are by default false.*/

    const student = {
        registration: "123456",
        name: "Sandeep",
        age: 33,
    }

    for(let key in student)
        console.log(key, student[key]);

    Object.defineProperty(student, "marks", {
        value: 98,
        enumerable: false,
    });

    console.log(student.marks);

     for(let key in student)
        console.log(key, student[key]); // Ignores 'marks' key and its value '98' due to enumerable flag is false
});

//Test Text
//Test Text 2
//Test Text 3