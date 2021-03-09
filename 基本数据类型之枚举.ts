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