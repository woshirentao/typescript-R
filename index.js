function s(x) {
    return new Array().concat(x);
}
s([1, 2, 3, 4]);
s(['2', 1, 12]);
// 这种方式的缺点在于：如果我们传入一个数字类型，任何类型的值都有可能被返回
/**
 * 软件工程中，我们不仅要创造定义良好的API，同时也要考虑可重用行，组件不仅能
 * 够支持当前的数据类型，同时也能够支持未来数据类型
 * 泛型：
 * 使返回值的类型与传入参数的类型是相同的，T 用来捕获用户传入的类型，之后就可以使用这个类型
 * 作用：泛型就是解决类、接口、方法的复用性以及对不特定类型的数据的支持
 */
function identity(x) {
    return new Array().concat(x);
}
/**
 * 两种使用方式：
 * 1、明确的指定了T是string类型
 * 2、利用了类型推论，让编译器来判断T的类型
 */
identity([1, 2]);
identity([1, 2, '3']);
// 泛型类型的表示
function G1(arg) {
    return arg;
}
// 泛型类型：<U>(arg: U) => U
var g = G1;
var gg = G1;
function identity1(arg) {
    return arg;
}
var inter = identity1;
// 泛型类
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person = new Person('rentao', 23);
