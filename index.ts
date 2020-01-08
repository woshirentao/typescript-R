var fn = () => 'hello'
var a:number
a = 10
// 数组的定义
{
  // 第一种方式：类型+[]
  let array: string[] = ['','132']
  // 第二种方式是使用数组泛型
  let array1: Array<number> = [1,2,3]

}
// 元组的定义
{
  let a: [string, number] = ['12',23]
  console.log(a[0], a[1])
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
  function warnUser(): void {
    console.log("This is my warning message");
  }
  let emptyValue: void = null

}
// null和undefined
/**
 * undefined和null两者各自有自己的类型分别叫做undefined和null,但是只能为它赋予undefined和null
 * 默认情况下null和undefined是所有类型的子类型。除非加上--strictNullChecks,如：tsc --strictNullChecks index.ts
 * 尽可能地使用--strictNullChecks
 */
{
  // let a: undefined = 123
  // let b: null = 34
  let u: undefined = undefined;
  let n: null = null;
  // 当--strictNullChecks和联合类型一起使用时，null可以传递
  function strictNullChecks(value: string|null|undefined): void {
    console.log("联合类型", value);
  }
  strictNullChecks(null)
}

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
