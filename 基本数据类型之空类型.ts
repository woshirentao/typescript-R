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