/**
 * 联合类型:
 * 联合类型（Union Types）表示取值可以为多种类型中的一种
 */
{
  function toString2(x: number | string) : string {
    return x.toString()
  }
  toString2(1)
  toString2('1')
}
/**
 * 断言：类似于其他语言中类型转换的用法，但是并不会转换类型，只是告诉编译器这个变量的类型是什么
 * 它没有运行时的影响，只是在编译阶段起作用，去掉无用（实际并没有错，只是类型检查的漏洞）的语法错误信息
 * 有两种形式：<>和as
 */
{
  let string: any = "23";
  let num: number = (<string>string).length;
  let num1: number = (string as string).length;
  console.log(num);
  // 小栗子
  function getLength(x: number | string) {
    // if (x.length) { // error
    //   return x.length
    // } else {
    //   return x.toString().length
    // }
    if ((x as string).length) { // 断言方式
      return (x as string).length
    } else {
      return x.toString().length
    }
  }

  console.log(getLength(12312312312))
}

{
  // 类型推断: TS会在变量声明（但是没有明确的指定类型）时，推测出一个类型
  let b9 = 123 // 推测出是number类型
  // b9 = 'abc' // error
}
