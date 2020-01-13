var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// extends 在这里不是继承，而是用来 约束 泛型T的类型
function loggingIdentity(arg) {
    console.log(arg);
    return arg;
}
loggingIdentity({
    length: 12
});
// 泛型中使用类类型
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
// new ()=> T : 代表一个具有 无参 构造函数 的 类类型
function createInstance(t) {
    return new t();
}
var dog = createInstance(Dog);
