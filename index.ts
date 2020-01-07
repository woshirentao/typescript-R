/**
 * 接口：类型检查器
 * 对值所具有的结构进行类型检查,对得上才行
 * 规定格式规范
 * 与类型别名type不同，接口可以重复声明，会合并在一起
 */

 interface Person {
   name: string,
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
   print(name) {
    console.log('对象定义方法')
   }
 })

 class Persons {
   name: string = '默认名字'
   print(name) {
     console.log('类定义方法')
   }
 }
 checkPerson(new Persons())
// 使用接口类型
//  let a: Person = {
//    name: ''
//  }
