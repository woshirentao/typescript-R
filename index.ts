/**
 * 接口：类型检查器
 * 对值所具有的结构进行类型检查,对得上才行
 * 规定格式规范
 */

 interface Person {
   name: string,
   age?: number // 可选类型
   // 定义方法
   print(name: string): void
 }

 function checkPerson(o: Person) {
  // console.log(o.name);
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

//  let a:Person = {
//    name: ''
//  }