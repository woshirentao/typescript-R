// 函数
// 规定参数的类型，返回值类型：可以省略，用ts的类型推断

function add(a: number, b: number): number {
  return a + b
}
// 函数表达式的方式
let add1 = function(a: number, b: number): number {
  return a + b
}
// 函数类型：(a: number, b: number) => number
let addd: (a: number, b: number) => number = function(a: number, b: number): number {
  return a + b
}
// 箭头函数的方式
let add2 = (a: number, b: number) => {
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
 * 注意：一般带有默认值的参数要放到参数列表的最后，可以不明确参数类型约束
 */
let add4 = function(a: number, b = 12): number {
  return a + b
}
add4(2)
// 注意：带有默认值的参数会自动指定了参数类型，下面代码会报错
// add4(2, '')


/**
 * 可选值(?)
 * 注意：一般可选的参数也要放到参数列表的最后，不能和默认值共用
 */
let add5 = function(a: number, b?: number): number {
  return a + (b || 0)
}
console.log(add5(12))


/**
 * 剩余参数
 * 当参数个数不确定时使用
 */
let add6 = function(a: number, b: number, ...rest: number[]): number {
  return a + b + rest[0]
}
console.log('add6', add6(1,2,3,4,5))



/**
 * 多种可选类型、联合类型(|)
 */
let add7 = function(value: number|string) {
  return value
}
console.log('add7', add7('我是任涛'))

/**
 * 函数的定义方式:
 * 1、any
 * 2、Function
 * 4、类型别名
 * 5、函数类型接口
 */
// 3、
let func: (name: string) => boolean = function(name: string): boolean {
  return name == 'rentao'
}

/**
 * this指向的问题:
 * this的值在函数被调用的时候才会指定,在返回一个函数或将函数当做参数传递的时候，很难确定this的值
 */
let obj = {
  w: 10,
  h: 10,
  getArea() {
  //   return function() {
  //     let area = this.w * this.h // 此时this指向window，报错"this" 隐式具有类型 "any"，因为它没有类型注释。
  //     console.log(this)
  //   }
    /**
     * 解决办法：
     * 返回箭头函数,箭头函数能保存函数创建时的 this值，而不是调用时的值,
     * 但是this的类型默认是any，any类型没有任何意义，即时调用不对，编译器也不会报错
     * 默认情况下，编译器不会指出this的指向问题，给编译器设置了--noImplicitThis标记，会指出this的问题，一般都打开
     * */
    return ()=>{
      // let area = this.w * this.g // this.g不会报错，导致类型检测没有意义了，--noImplicitThis下会检测出this的类型为当前对象，this.g就会报错
      console.log(this)
    }
  },
  // this是个假参数，运行时不会有，是给编译器 检测和编译使用的
  callback(this: GlobalEventHandlers, e: Event) {
    console.log(this)
  }
}
let areaFunc = obj.getArea();
let area = areaFunc();
/**
 * this在回调函数中的问题:
 * this不会指向document对象，需要提供一个显式的 this参数
 */
document.onclick = obj.callback;

/**
 * 函数重载：
 * 允许用相同的名字创建参数不同的函数
 */
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string, card: number }[]): number;
function pickCard(x: number): {suit: string, card: number };
/**
 * 检测函数，必须声明
 * 注意：这个函数并不是重载列表的一部分
 * 只有参数列表和返回值符合的调用才是有效的，以其它参数调用 pickCard会产生错误
 */
function pickCard(x: any): any {
  if (typeof x == "object") {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
  }
  else if (typeof x == "number") {
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
  }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];

let pickedCard2 = pickCard(15);

// pickCard('123'); // 会报错
