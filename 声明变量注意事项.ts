{
  // 当使用var声明变量，重复声明时，必须是同类型
  var a: number = 0;
  // var a: string = '' // 不可以


  /**
   * 也可以使用let和const
   * let 有块作用域限制  不能重复定义
   */
  for (let index = 0; index < 10; index++) {
    // console.log(index)
  }
  
  // 无法访问index,有作用域限制
  // console.log(index)
}