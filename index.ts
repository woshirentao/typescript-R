/**
 * 接口：类型检查器，只能声明属性和方法，不能赋值与实现
 * 对值所具有的结构进行类型检查,对得上才行
 * 规定格式规范
 * 与类型别名type不同，接口可以重复声明，会合并在一起
 * 作用：1、作为类型检测
 * 2、类可以实现接口
 */

 interface Person {
  //  name: string = '123', // 只能声明
   name: string
   age?: number // 可选类型
   // 定义方法：只是方法的定义，没有实现
   print(name: string): void
 }

 function checkPerson(o: Person) {
  o.print(o.name)
 }

 checkPerson({
   age: 13,
   name: '任涛',
   print(name: string): void {
    console.log('对象定义方法')
   }
 })

 class Persons {
   name: string = '默认名字'
   print(name: string): void {
     console.log('类定义方法')
   }
 }
 checkPerson(new Persons())
// 使用接口类型
//  let a: Person = {
//    name: ''
//  }

/**
 * 类实现接口:
 * 需要实现接口中的所有属性和方法
 */
class Rentao implements Person {
  name: string = '类实现了接口'
  print(name: string): void {
    console.log(this.name)
  }
}
// 可以实现多个接口
interface Person3 {
  height: number
}
class Rentao1 implements Person, Person3 {
  name: string = '类实现了接口'
  height: number
  print(name: string): void {
    console.log(this.name)
  }
}

// let rt: Rentao = new Rentao()
// 也可以将变量声明为接口类型
let rt: Person = new Rentao()
rt.print('')

/**
 * 函数类型
 * 可以理解为声明了一个匿名函数类型
 */
interface Person2 {
  (source: string, subString: string): boolean;
}
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配，但是类型必须要对得上
let p2: Person2 = function(soc: string, subStr: string): boolean {
  console.log(soc, subStr)
  return true
}
// 当函数一样调用
p2('hhhh', '123')

// 断言与接口的使用
let person = {} as Person
// let person = <Person>{
//   name: '第二种用法'
// }
person.name = '断言person' // 会报错，找不到name属性，需要使用断言告诉编译器
console.log(person.name)



/**
 * 接口继承: 从一个接口里复制成员到另一个接口里
 * 可以实现多继承
 */
interface Shape {
  width: number
}
interface Shape1 {
  color: string
}
// 接口多继承
interface Square extends Shape, Shape1 {
  height: number
}
let shape: Square = {
  width: 12,
  height: 12,
  color: 'red'
}
// 类实现接口
class ShapeClass implements Square {
  width: number
  height: number
  color: string
}
/**
 * 接口继承类
 * 当接口继承了一个类时，它会继承类的成员但不包括其实现。
 */ 
class Components {
  width: number
  height: number
  display(): void {

  }
}
// 继承了Components的width和height，还有display方法
interface Button extends Components {

}

let button: Button = {
  width: 0,
  height: 0,
  display(): void {
    console.log('displaying')
  }
}
button.display()

/**
 * 可索引的类型:
 * TypeScript支持两种索引签名：字符串和数字
 * 数字索引可以定义数组，但是并没有数组特有的方法和属性
 * 字符串索引可以定义对象
 */ 
interface StringDictionary {
  [propName: string]: string
}
let dic: StringDictionary = {
  name: 'RT'
}
console.log(dic.name)

interface NumberArray {
  [index: number]: string
}
let array: NumberArray = ['1','2','3']
console.log(array)

// 使用：额外的属性检查
interface Person1 {
  [propName: string]: any // 最佳的方式是添加一个字符串索引签名
}

/**
 * 注意：可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
 * 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象
 */
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
interface NotOkay {
  [x: number]: Dog;
  [x: string]: Animal;
}
/**
 * 注意：字符串索引签名，必须确保所有属性与其返回值类型相匹配
 * 因为字符串索引声明了 obj.property和obj["property"]两种形式都可以
 * 数字索引签名没有这样的要求
 */
// 字符串索引
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  // name: boolean       // 错误，`name`的类型与索引类型返回值的类型不匹配，必须都保持同一个类型
}
// 数字索引
interface inter {
  [index: number]: number
  length: string
}