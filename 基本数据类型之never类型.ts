/**
 * never类型: 表示的是那些永不存在的值的类型，如无限循环、抛出异常
 * never类型是任何类型的子类型，可以赋值给任何类型
 * 注意：没有类型是never的子类型，即不可以赋值给never类型
 */
{
  function error(message: string): never {
    throw new Error(message);
  }
  error('报错信息')
}