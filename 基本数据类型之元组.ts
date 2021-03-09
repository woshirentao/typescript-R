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