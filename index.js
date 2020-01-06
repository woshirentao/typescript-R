// 类
// 定义类
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var aPerson = new Person();
aPerson.firstName = '任';
aPerson.lastName = '涛';
// 不能访问不存在的 成员变量
// aPerson.name = '123'
// 类型限制
// aPerson.firstName = 123
// 方法定义
