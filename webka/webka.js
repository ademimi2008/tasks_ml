// /// 1
// const name = 'Nurbiyke';
// const age = '17';


// console.log(`My name is ${name}, I am ${age} years old`);


// // 2
// console.log(typeof null);
// // Это просто древний косяк в самом языке. null — это вообще-то примитив (пустота),
// // но из-за бага в коде JS еще из 90-х он до сих пор прикидывается объектом. Короче,
// // мем, который все просто зазубривают.
// console.log(typeof undefined);
// // Ну, тут все логично, типа сам за себя говорит. Означает, что переменная как бы есть,
// // её создали, но блин, забыли положить туда какое-либо значение. Тип «не определено».
// console.log(typeof NaN);
// // Вот тут реально вынос мозга. NaN — это типа «не число», но JS считает, что это такое
// // специальное... число! Ну, например, когда ты пытаешься строку разделить на ноль,
// // получается математическая дичь, и JS выдает NaN с типом number. Короче, логику тут лучше не искать.
// console.log(typeof function(){});
// // Ну, тут вообще все изи. Это функция, типа рабочий код. Под капотом в JS функции устроены
// // как объекты, но typeof специально выделяет их отдельно, ну, чтобы сразу было
// // понятно — эту штуку можно запустить.


// //3
// let a = 1;
// const b = 2;
// a = 5;
// b = 10;  // тут ошибка потому что констану нельзя изменить , в сравнении лет можно


// //4
// "5" + 3 // 52
// "5" - 3 // 2
// "5" * "2"//10
// true + 1 //2
// "" + 1 + 0//10
// "4px" - 2//NaN
// null + 1//1
// undefined + 1//NaN


// //5
// let a = "12";
// let b = "8";


// console.log(Number(a) + Number(b));


// let a = "12";
// let b = "8";


// console.log(+a + +b);


// // 6
// let numA = 5;
// let numB = numA++ + ++numA;


// console.log("a =", numA);
// console.log("b =", numB);


// // 7
// console.log("2" > "12");
// console.log(2 > "12");
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(null >= 0);
// console.log(NaN == NaN);




// //  8
// let score = 85;


// if (score >= 90) {
//     console.log("A");
// } else if (score >= 70) {
//     console.log("B");
// } else if (score >= 50) {
//     console.log("C");
// } else {
//     console.log("F");
// }




// // 9
// let grade = score >= 90 ? "A" :
//             score >= 70 ? "B" :
//             score >= 50 ? "C" : "F";


// console.log(grade);


// // 10
// console.log(null || 0 || "" || "hi");
// console.log(1 && 2 && null && 3);
// console.log(!!"0");
// console.log(0 ?? 5);
// console.log(0 || 5);




// // 11
// let checkAge = 25;


// console.log(checkAge >= 18 && checkAge <= 60);


// //  12
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }




// //  13
// let i = 1;
// let sum = 0;


// while (i <= 100) {
//     sum += i;
//     i++;
// }


// console.log("Sum =", sum);




// // 14
// for (let i = 1; i <= 15; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }




// //  15
// function min(a, b) {
//     return a < b ? a : b;
// }


// const minArrow = (a, b) => a < b ? a : b;


// console.log(min(5, 3));
// console.log(minArrow(5, 3));




// // 16
// const isEven = n => n % 2 === 0;


// console.log(isEven(4));
// console.log(isEven(5));




// //  17
// function greet(name = "guest") {
//     return "Hello, " + name;
// }


// console.log(greet());
// console.log(greet(undefined));
// console.log(greet(null));


//1

const sum = function(a, b) {
  return a + b;
};

const sumArrow = (a, b) => a + b;

console.log(sum(3, 4)); // 7
console.log(sumArrow(3, 4)); // 7
//2 
// ошибка во втором коде sayBye() 
//3
function checkAge(age, onAdult, onChild) {
  if (age >= 18) {
    onAdult();
  } else {
    onChild();
  }
}

checkAge(20, () => console.log("Доступ разрешён"), () => console.log("Доступ запрещён"));
//4
const user = {
  name: "Ali",
  age: 20
};

user.isAdmin = true;
user.name = "Aibek";
delete user.age;

console.log("age" in user); // false

console.log(user); // { name: "Aibek", age: 20, isAdmin: true }
//5
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
//6
let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); // 2000
//7
["1", "2", "color", "z"]
//8
2
true 
false
//9
const copy1 = Object.assign({}, user);
const copy2 = { ...user };
//10
osh
const copy = structuredClone(user);
copy.address.city = "Osh";

console.log(user.address.city); // Bishkek
//11
const calculator = {
  set(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};
//12
// Hi Ali
// Hi, indefined

const hi = user.hi.bind(user);

console.log(hi()); // Hi, Ali
//13
const counter = {
  count: 0,

  inc() {
    this.count++;
    return this;
  },

  dec() {
    this.count--;
    return this;
  },

  print() {
    console.log(this.count);
    return this;
  }
};
//14
function User(name, age) {
  this.name = name;
  this.age = age;

  this.isAdult = function() {
    return this.age >= 18;
  };
}

const user1 = new User("Ali", 20);
const user2 = new User("Aibek", 16);

console.log(user1.isAdult()); // true
console.log(user2.isAdult()); // false
//15
function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;

  this.deposit = function(n) {
    this.balance += n;
  };

  this.withdraw = function(n) {
    if (n > this.balance) {
      console.log("Недостаточно средств");
    } else {
      this.balance -= n;
    }
  };
}
//16
Ali
undefined
TypeError
undefined
//17
function getCity(user) {
  return user.address?.city ?? "Unknown";
}

console.log(getCity({})); // Unknown
console.log(getCity({ address: {} })); // Unknown
console.log(getCity({ address: { city: "Bishkek" } })); // Bishkek
