/**
 * void类型像是与any类型相反，它表示没有任何类型
 * 当一个函数没有返回值时，你通常会见到其返回值类型是 void
 * 只能为它赋予undefined和null
 */
{
  function warnUser(): void {
    console.log("This is my warning message");
  }
  // 定义void类型变量
  let emptyValue: void = null
}