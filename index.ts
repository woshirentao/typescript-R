// 函数
// 规定参数的类型，返回值类型
function add(a: number, b: number): number {
  return a + b
}
// 声明变量的方式
let add1 = function(a: number, b: number): number {
  return a + b
}

// 箭头函数的方式
let add2 = (a: number, b: number): number => {
  return a + b
}
// 指定无返回值
let add3 = (a: number, b: number): void => {
  console.log((a + b).toFixed(2)) // toFixed保留两位小数
}
add(1, 2)
// 以下代码会报错
// add(1, '')
// add(1)


/**
 * 默认值(=)
 * 有默认值的参数可以不指定类型，会自动指定类型
 * 注意：一般带有默认值的参数要放到参数列表的最后
 */
let add4 = function(a: number, b: number = 12): number {
  return a + b
}
add4(2)
// 注意：带有默认值的参数会自动指定了参数类型，下面代码会报错
// add4(2, '')


/**
 * 可选值(?)
 * 注意：一般可选的参数也要放到参数列表的最后
 */
let add5 = function(a: number, b?: number): number {
  return a + (b || 0)
}
console.log(add5(12))


/**
 * 剩余参数
 */
let add6 = 
function(a: number, b: number, ...rests: number[]): number {
  return a + b + rests[0]
}
console.log('add6', add6(1,2,3,4,5))