# 类型
1. 原始类型
string number boolean null undefined symbol bigInt

- 浮点数，js在计算浮点数的时候会存在精度丢失

js会将浮点树转为二进制进行相加

const声明的值不能被改变

2. 引用类型

# 类型判断
1. typeof —— 可以判断除了null之外的所有原始类型
2. instanceof —— 判断不了原始类型，只能判断引用类型（因为它是根据原型链来判断的）
3. Object.prototype.toStrinng.call()

- toString
js中每一种类型都有自己的toString函数，这些toString可以分为3类
1. 对象上的toString: 返回一个'[object xxxx]'结构的字符串
2. 数组上的toString：返回数组类元素以逗号拼接得到的字符串
3. 其他：返回字符串字面量

- 对象上的toString
toString(x)，v8会读取到x的内部属性 [[class]]，这个属性记录的就是x的所属的构造函数，toString最终会返回 由"[object" + class + "]" 拼接得到的字符串

- call