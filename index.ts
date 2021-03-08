// 基本数据类型
{
  // 数字
  let a: number;
  a = 10;
  // 支持二进制、八进制、十六进制
  let a1: number = 0b1010;
  let a2: number = 0o12;
  let a3: number = 0xa;
}
// 注意事项
{
  // 当使用var声明变量，重复声明时，必须是同类型
  var a: number = 0;
  // var a:string = '' // 不可以
  // 也可以使用let和const
  /**
   * let 有块作用域限制  不能重复定义
   */
  for (let index = 0; index < 10; index++) {
    // console.log(index)
  }
  // 无法访问index,有作用域限制
  // console.log(index)
}
// 数组的定义
{
  // 第一种方式：类型[]
  let array: string[] = ["", "132"];
  // 第二种方式是使用泛型
  let array1: Array<number> = [1, 2, 3];
}
/**
 * 元组：允许表示一个已知元素数量和类型的数组
 * 跟数组类似，但是可以存放不同类型的值，而且元素的数量是固定的
 * 注意：顺序必须对应
 */
{
  let a: [string, number];
  a = ["12", 23];
  // 当访问一个已知索引的元素，会得到正确的类型
  console.log(a[0].substr(1)); // OK
  // console.log(a[1].substr(1)); // Error, 'number' does not have 'substr'

  // 对于溢出部分，采用联合类型(string | number)进行类型判断，得需要修改配置文件才能支持
  // a[2] = "2";
}
// object类型
{
  function createObject(obj: object): object {
    console.log(obj)
    return obj
  }
  // createObject(1) // error
  createObject(String) // ok
  createObject({}) // ok

  // 定义具体的object类型{ name: string; age?: number }
  let object: { name: string; age?: number } = {
    name: ""
  };
  // 使用类型别名，和接口很像
  type nameObj = { name: string; age: number };
  let obj: nameObj = {
    name: "123",
    age: 12,
    // a: ''  // 不能写多于的属性
  };
}
/**
 * 枚举:
 * 使用枚举我们可以定义一些带名字的常量，提高代码可读性
 * 使用枚举类型可以为一组数值赋予友好的名字。
 */
{
  // 每个成员都有对应的树值，默认是从0开始，自动依次递增的
  enum Color {
    red,
    green,
    yellow
  }
  // 可以修改默认的数据值
  // enum Color {
  //   Class1 = 1,
  //   Class2 = 3
  // }
  // 枚举类型提供的一个便利是你可以由枚举的值得到它所对应的名字
  let a: string = Color[1]; // 根据值得到名字
  console.log(a);
  let b: Color = Color.red; // 根据名字得到对应的值，是个number类型
  console.log(b);

  // 字符串枚举
  // 由于字符串枚举没有自增长的行为，每个成员都必须用字符串字面量
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  console.log(Direction.Up)
  
}
// any：任意类型
{
  let a: any = "";
  a = 10;
  console.log(a);
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
  // function warnUser(): void {
  //   console.log("This is my warning message");
  // }
  // 定义void类型变量
  // let emptyValue: void = null
}
// null和undefined
/**
 * undefined和null两者各自有自己的类型分别叫做undefined和null,但是只能为它赋予undefined和null
 * 默认情况下null和undefined是所有类型的子类型，
 * 如果不想把null和undefined赋给其他类型，除非加上--strictNullChecks,如：tsc --strictNullChecks index.ts
 * 尽可能地使用--strictNullChecks
 */
{
  // let a: undefined = 123
  // let b: null = 34
  let u: undefined = undefined;
  let n: null = null;
  let a: number;
  // a = null // 当开启严格模式或strictNullChecks时，不允许赋值，默认是开启的
  // 当使用联合类型时，null就可以传递了
  // function strictNullChecks(value: string|null|undefined): void {
  //   console.log("联合类型", value);
  // }
  // strictNullChecks(null)
}

/**
 * never类型: 表示的是那些永不存在的值的类型，如无限循环、抛出异常
 * never类型是任何类型的子类型，可以赋值给任何类型
 * 注意：没有类型是never的子类型，即不可以赋值给never类型
 */
{
  // function error(message: string): never {
  //   throw new Error(message);
  // }
  // error('报错信息')
}
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
