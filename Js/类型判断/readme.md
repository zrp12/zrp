# typeof
1. 可以判断除了null之外的所有原始类型
2. 除了function其他所有的引用类型都会被判断成object
3. typeOf是通过将值转化为二进制后判断其二进制前三位是否为0，是则为object

# instanceof
1. 只能判断引用类型,对象和函数有原型，原始类型没有原型
2. 通过原型链查找来判断类型

# Object.prototype.toString(xxx)
1. 如果此值未定义，则返回 "[object Undefined]"。

2. 如果此值为 null，则返回 "[object Null]"。

3. 让 O 成为调用 ToObject 时以此值作为参数的结果。将 O 作为 ToObject(this) 的执行结果

4. 让 class 成为 O 的 [[Class]] 内部属性的值。定义一个class作为内部属性[[Class]]的值

5. 返回由三个字符串 "[object "、class 和 "]" 连接而成的字符串值。


# Object.prototype.toString.call(xxx)


# Array.isArray(x)
判断数组
