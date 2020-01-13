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
 * 作用：泛型就是解决类、接口、方法的复用性以及对不特定类型的数据的支持
 */
function identity<T>(x: T[]): T[] {
  return new Array<T>().concat(x)
}
/**
 * 两种使用方式：
 * 1、明确的指定了T是string类型
 * 2、利用了类型推论，让编译器来判断T的类型
 */
identity<number>([1,2])
identity([1,2,'3'])

// 泛型类型的表示
function G1<T>(arg: T): T {
  return arg
}
// 泛型类型：<U>(arg: U) => U
let g: <U>(arg: U) => U = G1
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

// 泛型约束
interface Lengthwise {
  length: number;
}
// extends 在这里不是继承，而是用来 约束 泛型T的类型
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
  // constructor(age: number) { // 带有参数，error：类型“typeof Dog”的参数不能赋给类型“new () => Dog”的参数
  //   super()
  // }
}
// new ()=> T : 代表一个具有 无参 构造函数 的 类类型
function createInstance<T extends Animal>(t: new ()=> T): T {
  return new t()
}
let dog: Dog = createInstance(Dog)
