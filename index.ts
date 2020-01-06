// 类
// 定义类
class Person {
  // 声明成员变量的类型
  firstName: string
  lastName: string
}

let aPerson = new Person()

aPerson.firstName = '任'
aPerson.lastName = '涛'
// 不能访问不存在的 成员变量
// aPerson.name = '123'
// 类型限制
// aPerson.firstName = 123