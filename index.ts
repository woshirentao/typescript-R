var fn = () => 'hello'
var a:number
a = 10
// 数组的定义
{
  let array: string[] = ['','132']
  // 第二种方式是使用数组泛型
  let array1: Array<number> = [1,2,3]

}
// 元组的定义
{
  let a: [string, number] = ['12',23]
  console.log(a[0], a[1])
}
/**
 * 枚举: 
 * 使用枚举类型可以为一组数值赋予友好的名字。
 * 枚举类型提供的一个便利是你可以由枚举的值得到它的名字
 */
{
  enum Color { Class1 = 1, Class2 = 3 }
  let a: string = Color[1] // 根据一个数值得到名字
  console.log(a)
  let b: Color = Color.Class1  // 获取的是一个数值
  console.log(b)
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

