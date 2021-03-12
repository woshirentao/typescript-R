/**
 * 可选值(?)
 * 注意：一般可选的参数也要放到参数列表的最后，不能和默认值共用
 */
(()=>{
  let add5 = function(a: number, b?: number): number {
    return a + (b || 0)
  }
  console.log(add5(12))
})()