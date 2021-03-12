/**
 * 函数重载：
 * 函数名相同，参数类型及个数不同
 */
let suits = ["hearts", "spades", "clubs", "diamonds"];

// 声明重载列表
function pickCard(x: {suit: string, card: number }[]): number;
function pickCard(x: number): {suit: string, card: number };
/**
 * 这是一个检测函数，必须声明
 * 注意：这个函数并不是重载列表的一部分
 * 只有当参数列表和返回值符合时，调用才有效，以其它参数调用 pickCard会产生错误
 */
function pickCard(x: any): any {
  if (typeof x == "object") {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
  }else if (typeof x == "number") {
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
  }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];

let pickedCard2 = pickCard(15);

// pickCard('123'); // 报错
