var fn = () => 'hello'
var a:number
a = 10
// 数组的定义
{
  // 第一种方式：类型[]
  let array: string[] = ['','132']
  // 第二种方式是使用泛型
  let array1: Array<number> = [1,2,3]
}
/**
 * 元组的定义
 * 跟数组类似，但是可以存放不同类型的值
 * 注意：顺序必须对应
 */
{
  let a: [string, number] = ['12',23]
  console.log(a[0], a[1])
  // 对于溢出部分，采用联合类型(string | number)
  // a[2] = 2
}
// Object
{
  let object: { name: string, age?: number } = {
    name: ''
  }
  // 类型别名--------和接口（interface）很像
  type nameObj = { name: string, age: number }
  let obj: nameObj = {
    name: '123',
    age: 12
  }
}
/**
 * 枚举: 
 * 提高代码可读性
 * 使用枚举类型可以为一组数值赋予友好的名字。
 * 枚举类型提供的一个便利是你可以由枚举的值得到它的名字
 */
{
  enum Color { 
    Class1 = 1, 
    Class2 = 3 
  }
  let a: string = Color[1] // 根据一个数值得到名字
  console.log(a)
  let b: Color = Color.Class1  // 获取的是一个数值
  console.log(b)
}
// any：任意类型
{
  let a: any = ''
  a = 10
  console.log(a)
  // 可以使用any定义一个元素类型不确定的数组
  let list: any[] = [1, true, "free"];
  list[1] = 100;
}
// void
/**
 * void类型像是与any类型相反，它表示没有任何类型
 * 当一个函数没有返回值时，你通常会见到其返回值类型是 void
 * 只能为它赋予undefined和null
 */
{
  // function warnUser(): void {
  //   console.log("This is my warning message");
  // }
  // let emptyValue: void = null

}
// null和undefined
/**
 * undefined和null两者各自有自己的类型分别叫做undefined和null,但是只能为它赋予undefined和null
 * 默认情况下null和undefined是所有类型的子类型，
 * 如果不想把null和undefined赋给其他类型，除非加上--strictNullChecks,如：tsc --strictNullChecks index.ts
 * 尽可能地使用--strictNullChecks
 */
{
  // let a: undefined = 123
  // let b: null = 34
  let u: undefined = undefined;
  let n: null = null;
  let a: number;
  // a = null
  // 当--strictNullChecks和联合类型一起使用时，null可以传递
  // function strictNullChecks(value: string|null|undefined): void {
  //   console.log("联合类型", value);
  // }
  // strictNullChecks(null)
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
for (let index = 0; index < 10; index++) {
  // console.log(index)
}
// 无法访问index,有作用域限制
// console.log(index)

/**
 * 断言：类似于其他语言中类型转换的用法，但是并不会转换类型，只是告诉编译器这个变量的类型是什么
 * 它没有运行时的影响，只是在编译阶段起作用
 * 有两种形式：<>和as
 */
let string: any = '23'
let num: number = (<string>string).length
let num1: number = (string as string).length
console.log(num)







Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@woshirentao 
woshirentao
/
typescript-R
1
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
typescript-R/index.ts /
@woshirentao
woshirentao No commit message
Latest commit 393d1e4 on 3 Mar 2020
 History
 1 contributor
207 lines (186 sloc)  5.3 KB
  
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
 * private：私有的，实例不能调用，只能在本类中访问，子类中能继承但无法使用
 * protected: 受保护的，实例不能调用，只能在本类和子类中使用，子类中能继承
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
 * protected标记的构造函数，表示此类不能被实例化，只能被继承
 * private标记的构造函数，表示此类既不能被实例化，也不能被继承
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
 * 这样会声明并初始化一个成员，不用再单独创建属性
 */
class Room {
  private name: string
  constructor(protected age: number, name: string) {
    this.name = name
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
  private _fullName: string; // 私有属性一般以_开头
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
let employee1 = new Employee1();
employee1.fullName = "Bob Smith";
console.log(employee1)
if (employee1.fullName) {
  console.log(employee1.fullName);
}

/**
 * 静态属性
 * 这些属性存在于类本身上面而不是类的实例上
 * 可以被继承
 */
class Doom {
  static doomName: string = '123'
  static getDoomName() {
    return this.doomName
  }
}
console.log(Doom.doomName)
console.log(Doom.getDoomName())

/**
 * 抽象类:
 * 抽象类做为其它派生类的基类使用。它们不能被实例化。，只能被继承
 * 不同于接口，抽象类可以包含成员的实现细节，也就是说不一定都是抽象方法，也可以有普通方法。
 * 抽象方法的语法与接口相似，但是，抽象方法必须包含 abstract关键字并且可以包含访问修饰符（除private）
 * 使用抽象类可以实现类的多态
 */
abstract class Animal {
  name: string;
  age: number; 
  abstract height: string; // 抽象属性，一般不用
  abstract greet(name?: string): void; // 抽象方法必须在子类中实现
  abstract greet1(name?: string): void; // 抽象方法必须在子类中实现
}
// let ani: Animal = new Animal() // 无法被实例化

/**
 * 继承类必须实现所有抽象类的抽象方法
 */
class Dog extends Animal {
  height: string
  greet(): void { // 实现抽象方法
    console.log('狗在打招呼')
  }
  greet1(): void { // 实现抽象方法
    console.log('狗在打招呼')
  }
}
class Cat extends Animal {
  height: string
  greet(): void {
    console.log('猫在打招呼')
  }
  greet1(): void { // 实现抽象方法
    console.log('狗在打招呼')
  }
}
let dog: Dog = new Dog()
let cat: Cat = new Cat()
let animais: Animal[] = [dog, cat]
animais.forEach(animal=>{
  animal.greet()
})
