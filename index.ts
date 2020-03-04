function s(x: any[]): any[] {
  return new Array().concat(x)
}
s([1, 2, 3, 4])
s(['2', 1, 12])
// 这种方式的缺点在于：如果我们传入一个数字类型，任何类型的值都有可能被返回

/**
 * 软件工程中，我们不仅要创造定义良好的API，同时也要考虑可重用行，组件不仅能
 * 够支持当前的数据类型，同时也能够支持未来数据类型
 * 泛型：
 * 使返回值的类型与传入参数的类型是相同的，T 用来捕获用户传入的类型，之后就可以使用这个类型
 * 作用：使函数和类支持多种类型，而不用写复杂的函数重载和联合类型，增强代码可读性
 * 灵活控制类型之间的约束
 */

// 泛型函数，可以使用默认值（=）
function identity<T = string>(x: T[]): T[] {
  return new Array<T>().concat(x)
}
/**
 * 两种使用方式：
 * 1、明确的指定了T是string类型
 * 2、利用了类型推论，让编译器来判断T的类型
 */
identity<number>([1,2])
identity([1,2,'3'])

/**
 * 泛型类型：
 * 泛型函数
 * 泛型接口
 * 泛型类
 */
// 泛型函数
function G1<T>(arg: T): T {
  return arg
}
// 泛型函数的两种声明方式：
let g: <U>(arg: U) => U = G1  // 一般用这个
let gg: {<T>(arg: T): T} = G1

// 泛型接口
interface Inter {
  <T>(arg: T): T
}
// 可以把泛型参数提到接口名上，需要传入T参数
interface Inter2<T> {
  (arg: T): T
}
function identity1<T>(arg: T): T {
  return arg;
}
let inter: Inter = identity1

// 泛型类
class Person<T, U> {
  name: T
  age: U
  constructor(name: T, age: U) {
    this.name = name
    this.age = age
  }
}

let person = new Person<string, number>('rentao', 23)
// 也可以不传递泛型参数，使用类型推导
let person1 = new Person('Jack', 10)


// 泛型约束
interface Lengthwise {
  length: number;
}
// extends 在这里不是继承，而是用来 约束 T的类型，不再是随意的类型，得符合Lengthwise结构
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg)
  return arg
}
loggingIdentity({
  length: 12
})

// 泛型中使用类类型
class Animal {
  age: number
}
class Dog extends Animal {
  constructor(age: number) { 
    super()
  }
}
// new ()=> T : 代表一个具有 无参 构造函数 的 类类型T，也可以写成{new (): T}，也就是说t是个构造函数
// <T extends Animal>：代表T需要具有Animal特征，也就是t构造函数必须返回Animal对象
function createInstance<T extends Animal>(t: new ()=> T): T {
  return new t()
}
// let dog: Dog = createInstance(Dog) // error：类型“typeof Dog”的参数不能赋给类型“new () => Dog”的参数
