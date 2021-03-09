/**
 * 可索引的类型
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

let obb: NumberArray = {
  0: '10',
  1: '20'
}
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