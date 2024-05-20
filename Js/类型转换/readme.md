# 显示类型转换
1. 原始值转布尔  Boolean(...)
2. 原始值转数字  Number(...)
3. 原始值转字符串  String(...)
4. 原始值转对象  new xxx(...)

# 对象转原始值  -- 通常发送隐式转换
- 所有对象转原始值，都会调用toString()方法
调用Object.prototype.toString()方法
1. {}.toString()  得到由"[object 和 class 和 ]" 组成的字符串
2. [].toString()  返回由数组内部元素以逗号拼接的字符串
3. 其他的toString()方法，返回字符串字面量

- valueOf()方法也可以将对象转成原始类型
1. 包装类对象


1. 任何对象转布尔都是true
2. 对象转字符串 ToPrimitive()
    - ToString()
    - ToPrimitive()

3. 对象转数字 ToPrimitive()
    - ToNumber()
    - ToPrimitive()

# ToPrimitive()
ToPrimitive(obj,String) ==> String(obj)
1. 如果接收到的是原始值，直接返回值
2. 否则，调用toString方法，如何得到原始值，返回
3. 否则，调用valueOf方法，如何得到原始值，返回
4. 报错

ToPrimitive(obj,Number) ==> String(obj)
1. 如果接收到的是原始值，直接返回值
2. 否则，调用valueOf方法，如何得到原始值，返回
3. 否则，调用toString方法，如何得到原始值，返回
4. 报错


-对象转布尔都是true

# 一元操作符 +

# 二元操作符 +
v1 + v2:
1. lprim = ToPrimitive(v1)
2. rprim = ToPrimitive(v2)
3. 如果lprim 或者 rprim是字符串，那么就ToString(lprim) 或者 ToString(rprim) 再拼接
4. 否则，就ToNumber(lprim) + ToNumber(rprim) 

# ==   11.9.3