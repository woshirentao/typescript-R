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
// let rt: Rentao = new Rentao()
// 也可以声明为接口类型
let rt: Person = new Rentao()
rt.print('')

// 额外的属性检查
interface Person1 {
  [propName: string]: any // 最佳的方式是添加一个字符串索引签名
}
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