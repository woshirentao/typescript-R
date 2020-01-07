// 类
// 定义类
class Person {
  // 声明成员变量的类型
  firstName: string;
  lastName: string;
  // 定义构造器方法
  constructor(firstName?: string) {
    this.firstName = firstName;
  }
  // 定义方法
  getFirstName() {
    return this.firstName;
  }
}

let aPerson = new Person();

aPerson.firstName = "任";
aPerson.lastName = "涛";
// 不能访问不存在的 成员变量
// aPerson.name = '123'
// 类型限制
// aPerson.firstName = 123

let aaPerson = new Person("小花");
// console.log(aaPerson.getFirstName())

/**
 * 继承：类从基类中继承了属性和方法
 * 派生类通常被称作 子类，基类通常被称作 超类
 * 多态
 */

class Rentao extends Person {
  // 自定义构造器,必须调用super
  constructor(firstName: string) {
    super(firstName);
  }
  getFirstName() {
    return `子类重写方法：${this.firstName}`;
  }
}
let aRT = new Rentao("任");
//  console.log(aRT.getFirstName())

/**
 * 公共，私有与受保护的修饰符
 * 成员都默认为 public
 *
 * public：任何属性和方法都可以被调用；子类中也可以访问；
 * private：私有的，只能在本类中访问，子类中能继承但无法使用
 * protected: 受保护的，只能在本类和子类中使用，子类中能继承
 */

class Mine {
  private tel: string = "13948"; //只能在类内部访问
  private getTel() {
    console.log(this.tel);
  }
  public myTel() {
    // 可以通过公有方法往出暴露
    return this.tel;
  }
}

let object = new Mine();
//  console.log(object.tel) // 不能访问
// object.tel = '131232132'
// object.getTel()
console.log(object.myTel());


class M extends Mine {
  getTel1() {
    // console.log(this.tel) //不能在子类中访问private属性
  }
}
let m = new M()
m.getTel1()

/**
 * 构造函数也可以被标记成 protected 或者 private，这意味着这个类不能被实例化
 * protected能被继承
 * private不能被继承
 */
class PersonItem {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends PersonItem {
  private department: string;

  constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
// let john = new PersonItem("John"); // 错误: 'Person' 的构造函数是被保护的.

/**
 * 参数属性 
 * 通过给构造函数参数前面添加一个访问限定符来声明
 * 这样会声明并初始化一个成员
 */
class Room {
  private name: string
  constructor(protected age: number, name: string) {
    this.name = name
    this.age = age
  }

}
let room = new Room(34, '小明')
console.log(room)
/**
 * 存取器
 * 通过getters/setters来截取对对象成员的访问
 * 注意：存取器要求你将编译器设置为输出ECMAScript 5或更高
 * 只带有 get不带有 set的存取器自动被推断为 readonly
 */
let passcode = "secret passcode";

class Employee1 {
  _fullName: string
  get fullName(): string {
    return this._fullName
  }
  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    }
    else {
        console.log("Error: Unauthorized update of employee!");
    }
  }
}
let employee = new Employee1();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}

/**
 * 静态属性
 * 这些属性存在于类本身上面而不是类的实例上
 */
class Doom {
  static doomName: string = '123'
  static getDoomName() {
    return this.doomName
  }
}
console.log(Doom.doomName)
console.log(Doom.getDoomName())