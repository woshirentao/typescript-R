"use strict";
var fn = function () { return 'hello'; };
var a;
a = 10;
// 数组的定义
{
    // 第一种方式：类型+[]
    var array = ['', '132'];
    // 第二种方式是使用数组泛型
    var array1 = [1, 2, 3];
}
// 元组的定义
{
    var a_1 = ['12', 23];
    console.log(a_1[0], a_1[1]);
}
// Object
{
    var object = {
        name: ''
    };
    var obj = {
        name: '123',
        age: 12
    };
}
/**
 * 枚举:
 * 提高代码可读性
 * 使用枚举类型可以为一组数值赋予友好的名字。
 * 枚举类型提供的一个便利是你可以由枚举的值得到它的名字
 */
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Class1"] = 1] = "Class1";
        Color[Color["Class2"] = 3] = "Class2";
    })(Color || (Color = {}));
    var a_2 = Color[1]; // 根据一个数值得到名字
    console.log(a_2);
    var b = Color.Class1; // 获取的是一个数值
    console.log(b);
}
// any：任意类型
{
    var a_3 = '';
    a_3 = 10;
    console.log(a_3);
    // 可以使用any定义一个元素类型不确定的数组
    var list = [1, true, "free"];
    list[1] = 100;
}
// void
/**
 * void类型像是与any类型相反，它表示没有任何类型
 * 当一个函数没有返回值时，你通常会见到其返回值类型是 void
 * 只能为它赋予undefined和null
 */
{
    function warnUser() {
        console.log("This is my warning message");
    }
    // let emptyValue: void = null
}
// null和undefined
/**
 * undefined和null两者各自有自己的类型分别叫做undefined和null,但是只能为它赋予undefined和null
 * 默认情况下null和undefined是所有类型的子类型。除非加上--strictNullChecks,如：tsc --strictNullChecks index.ts
 * 尽可能地使用--strictNullChecks
 */
{
    // let a: undefined = 123
    // let b: null = 34
    var u = undefined;
    var n = null;
    // 当--strictNullChecks和联合类型一起使用时，null可以传递
    function strictNullChecks(value) {
        console.log("联合类型", value);
    }
    strictNullChecks(null);
}
/**
 * never类型: 表示的是那些永不存在的值的类型，如无限循环、抛出异常
 * never类型是任何类型的子类型，也可以赋值给任何类型
 * 注意：没有类型是never的子类型或可以赋值给never类型
 */
// function error(message: string): never {
//   throw new Error(message);
// }
// error('报错信息')
// 重复声明变量时，必须是同类型
// var a:string = ''
// 也可以使用let和const
/**
 * let 有块作用域限制  不能重复定义
 */
for (var index = 0; index < 10; index++) {
    // console.log(index)
}
// 无法访问index,有作用域限制
// console.log(index)
/**
 * 断言：类似于其他语言中类型转换的用法，但是并不会转换类型，只是告诉编译器这个变量的类型是什么
 * 它没有运行时的影响，只是在编译阶段起作用
 * 有两种形式：<>和as
 */
var string = '23';
var num = string.length;
var num1 = string.length;
console.log(num);
/**
 * 高级类型
 */
/**
 * 可以为null的类型：默认情况下null和undefined可以赋值给任何类型的变量
 * --strictNullChecks标记可以进行严格的null检查：当你声明一个变量时，它不会自动地包含 null或 undefined
 * 注意：使用了 --strictNullChecks，可选参数会被自动地加上 | undefined
 * 加 !后缀可以将一个变量的空值类型去掉
 */
function f(x, y) {
    return x + (y || 0);
}
function assertNever(x) {
    console.log(x);
    throw new Error("Unexpected object: " + x);
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        default: return assertNever(s);
    }
}
