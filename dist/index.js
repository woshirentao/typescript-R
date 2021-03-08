// 基本数据类型
{
    // 数字
    var a_1;
    a_1 = 10;
    // 支持二进制、八进制、十六进制
    var a1 = 10;
    var a2 = 10;
    var a3 = 0xa;
}
// 注意事项
{
    // 当使用var声明变量，重复声明时，必须是同类型
    var a = 0;
    // var a:string = '' // 不可以
    // 也可以使用let和const
    /**
     * let 有块作用域限制  不能重复定义
     */
    for (var index = 0; index < 10; index++) {
        // console.log(index)
    }
    // 无法访问index,有作用域限制
    // console.log(index)
}
// 数组的定义
{
    // 第一种方式：类型[]
    var array = ['', '132'];
    // 第二种方式是使用泛型
    var array1 = [1, 2, 3];
}
/**
 * 元组：允许表示一个已知元素数量和类型的数组
 * 跟数组类似，但是可以存放不同类型的值，而且元素的数量是固定的
 * 注意：顺序必须对应
 */
{
    var a_2 = ['12', 23];
    console.log(a_2[0], a_2[1]);
    // 对于溢出部分，采用联合类型(string | number)
    a_2[2] = '2';
}
// 对象类型
{
    var object = {
        name: ''
    };
    var obj = {
        name: '123',
        age: 12
    };
}
/**
 * 枚举:
 * 提高代码可读性
 * 使用枚举类型可以为一组数值赋予友好的名字。
 * 枚举类型提供的一个便利是你可以由枚举的值得到它的名字
 */
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Class1"] = 1] = "Class1";
        Color[Color["Class2"] = 3] = "Class2";
    })(Color || (Color = {}));
    var a_3 = Color[1]; // 根据一个数值得到名字
    console.log(a_3);
    var b = Color.Class1; // 获取的是一个数值
    console.log(b);
}
// any：任意类型
{
    var a_4 = '';
    a_4 = 10;
    console.log(a_4);
    // 可以使用any定义一个元素类型不确定的数组
    var list = [1, true, "free"];
    list[1] = 100;
}
// void
/**
 * void类型像是与any类型相反，它表示没有任何类型
 * 当一个函数没有返回值时，你通常会见到其返回值类型是 void
 * 只能为它赋予undefined和null
 */
{
    // function warnUser(): void {
    //   console.log("This is my warning message");
    // }
    // let emptyValue: void = null
}
// null和undefined
/**
 * undefined和null两者各自有自己的类型分别叫做undefined和null,但是只能为它赋予undefined和null
 * 默认情况下null和undefined是所有类型的子类型，
 * 如果不想把null和undefined赋给其他类型，除非加上--strictNullChecks,如：tsc --strictNullChecks index.ts
 * 尽可能地使用--strictNullChecks
 */
{
    // let a: undefined = 123
    // let b: null = 34
    var u = undefined;
    var n = null;
    var a_5;
    // a = null // 当开启严格模式或strictNullChecks时，不允许赋值，默认是开启的
    // 当使用联合类型时，null就可以传递了
    // function strictNullChecks(value: string|null|undefined): void {
    //   console.log("联合类型", value);
    // }
    // strictNullChecks(null)
}
/**
 * never类型: 表示的是那些永不存在的值的类型，如无限循环、抛出异常
 * never类型是任何类型的子类型，也可以赋值给任何类型
 * 注意：没有类型是never的子类型或可以赋值给never类型
 */
{
    // function error(message: string): never {
    //   throw new Error(message);
    // }
    // error('报错信息')
}
/**
 * 断言：类似于其他语言中类型转换的用法，但是并不会转换类型，只是告诉编译器这个变量的类型是什么
 * 它没有运行时的影响，只是在编译阶段起作用
 * 有两种形式：<>和as
 */
{
    var string = '23';
    var num = string.length;
    var num1 = string.length;
    console.log(num);
}
