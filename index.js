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
// 类
// 定义类
var Person = /** @class */ (function () {
    // 定义构造器方法
    function Person(firstName) {
        this.firstName = firstName;
    }
    // 定义方法
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    return Person;
}());
var aPerson = new Person();
aPerson.firstName = "任";
aPerson.lastName = "涛";
// 不能访问不存在的 成员变量
// aPerson.name = '123'
// 类型限制
// aPerson.firstName = 123
var aaPerson = new Person("小花");
// console.log(aaPerson.getFirstName())
/**
 * 继承：类从基类中继承了属性和方法
 * 派生类通常被称作 子类，基类通常被称作 超类
 * 多态
 */
var Rentao = /** @class */ (function (_super) {
    __extends(Rentao, _super);
    // 自定义构造器,必须调用super
    function Rentao(firstName) {
        return _super.call(this, firstName) || this;
    }
    Rentao.prototype.getFirstName = function () {
        return "\u5B50\u7C7B\u91CD\u5199\u65B9\u6CD5\uFF1A" + this.firstName;
    };
    return Rentao;
}(Person));
var aRT = new Rentao("任");
//  console.log(aRT.getFirstName())
/**
 * 公共，私有与受保护的修饰符
 * 成员都默认为 public
 *
 * public：任何属性和方法都可以被调用；子类中也可以访问；
 * private：私有的，只能在本类中访问，子类中能继承但无法使用
 * protected: 受保护的，只能在本类和子类中使用，子类中能继承
 */
var Mine = /** @class */ (function () {
    function Mine() {
        this.tel = "13948"; //只能在类内部访问
    }
    Mine.prototype.getTel = function () {
        console.log(this.tel);
    };
    Mine.prototype.myTel = function () {
        // 可以通过公有方法往出暴露
        return this.tel;
    };
    return Mine;
}());
var object = new Mine();
//  console.log(object.tel) // 不能访问
// object.tel = '131232132'
// object.getTel()
console.log(object.myTel());
var M = /** @class */ (function (_super) {
    __extends(M, _super);
    function M() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    M.prototype.getTel1 = function () {
        // console.log(this.tel) //不能在子类中访问private属性
    };
    return M;
}(Mine));
var m = new M();
m.getTel1();
/**
 * 构造函数也可以被标记成 protected 或者 private，这意味着这个类不能被实例化
 * protected能被继承
 * private不能被继承
 */
var PersonItem = /** @class */ (function () {
    function PersonItem(theName) {
        this.name = theName;
    }
    return PersonItem;
}());
// Employee 能够继承 Person
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(PersonItem));
var howard = new Employee("Howard", "Sales");
// let john = new PersonItem("John"); // 错误: 'Person' 的构造函数是被保护的.
/**
 * 参数属性
 * 通过给构造函数参数前面添加一个访问限定符来声明
 * 这样会声明并初始化一个成员
 */
var Room = /** @class */ (function () {
    function Room(age, name) {
        this.age = age;
        this.name = name;
        this.age = age;
    }
    return Room;
}());
var room = new Room(34, '小明');
console.log(room);
/**
 * 存取器
 * 通过getters/setters来截取对对象成员的访问
 * 注意：存取器要求你将编译器设置为输出ECMAScript 5或更高
 * 只带有 get不带有 set的存取器自动被推断为 readonly
 */
var passcode = "secret passcode";
var Employee1 = /** @class */ (function () {
    function Employee1() {
    }
    Object.defineProperty(Employee1.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee1;
}());
var employee = new Employee1();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
/**
 * 静态属性
 * 这些属性存在于类本身上面而不是类的实例上
 */
var Doom = /** @class */ (function () {
    function Doom() {
    }
    Doom.getDoomName = function () {
        return this.doomName;
    };
    Doom.doomName = '123';
    return Doom;
}());
console.log(Doom.doomName);
console.log(Doom.getDoomName());
