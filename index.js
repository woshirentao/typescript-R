// 函数
// 规定参数的类型，返回值类型
function add(a, b) {
    return a + b;
}
// 声明变量的方式
var add1 = function (a, b) {
    return a + b;
};
// 箭头函数的方式
var add2 = function (a, b) {
    return a + b;
};
// 指定无返回值
var add3 = function (a, b) {
    console.log((a + b).toFixed(2)); // toFixed保留两位小数
};
add(1, 2);
// 以下代码会报错
// add(1, '')
// add(1)
/**
 * 默认值(=)
 * 有默认值的参数可以不指定类型，会自动指定类型
 * 注意：一般带有默认值的参数要放到参数列表的最后
 */
var add4 = function (a, b) {
    if (b === void 0) { b = 12; }
    return a + b;
};
add4(2);
// 注意：带有默认值的参数会自动指定了参数类型，下面代码会报错
// add4(2, '')
/**
 * 可选值(?)
 * 注意：一般可选的参数也要放到参数列表的最后
 */
var add5 = function (a, b) {
    return a + (b || 0);
};
console.log(add5(12));
/**
 * 剩余参数
 */
var add6 = function (a, b) {
    var rests = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rests[_i - 2] = arguments[_i];
    }
    return a + b + rests[0];
};
console.log('add6', add6(1, 2, 3, 4, 5));
/**
 * 多种可选类型、联合类型(|)
 */
var add7 = function (value) {
    return value;
};
console.log('add7', add7('我是任涛'));
/**
 *
 */
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('正在开车');
    };
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.ride = function () {
        console.log('正在骑车');
    };
    return Bike;
}());
// function driveOrRide(ver: Car | Bike) {
//   if (ver.drive) {
//     // ver.drive()  // 会编译报错，判断不出ver的类型
//   }
//   if ((ver as Bike).ride) { // 解决的第一种方法:断言
//     (ver as Bike).ride()
//   }
// }
/**
 * 第二种方式：用户自定义的类型保护
 */
// 类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型
function isFish(ver) {
    return ver.drive !== undefined;
}
// function driveOrRide(ver: Car | Bike) {
//   if (isFish(ver)) {
//     ver.drive()
//   }else {
//     ver.ride()
//   }
// }
/**
 * 第三种方式: instanceof类型保护
 * 最简便的方式，推荐使用
 */
function driveOrRide(ver) {
    if (ver instanceof Car) {
        ver.drive();
    }
    else {
        ver.ride();
    }
}
driveOrRide(new Bike());
/**
 * 函数类型的定义方式:
 * 1、any
 * 2、Function
 * 4、类型别名
 * 5、函数类型接口
 */
// 3、
var func = function (name) {
    return name == 'rentao';
};
/**
 * this指向的问题:
 * this的值在函数被调用的时候才会指定,在返回一个函数或将函数当做参数传递的时候，很难确定this的值
 */
var obj = {
    w: 10,
    h: 10,
    getArea: function () {
        var _this = this;
        // return function() {
        //   let area = this.w * this.h // 此时this指向window
        //   console.log(area)
        // }
        //解决办法：返回箭头函数,箭头函数能保存函数创建时的 this值，而不是调用时的值,默认情况下，编译器不会指出this的指向问题，给编译器设置了--noImplicitThis标记，会指出this的问题
        return function () {
            var area = _this.w * _this.h; // 此时this指向window
            console.log(area);
        };
    }
};
var areaFunc = obj.getArea();
var area = areaFunc();
/**
 * 函数重载：
 * 允许用相同的名字创建参数不同的函数
 */
var suits = ["hearts", "spades", "clubs", "diamonds"];
/**
 * 注意：这个函数并不是重载列表的一部分
 * 只有参数列表和返回值符合的调用才是有效的，以其它参数调用 pickCard会产生错误
 */
function pickCard(x) {
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var pickedCard2 = pickCard(15);
console.log(pickedCard2);
