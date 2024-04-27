#大厂有表现力的代码（百度一面的题目）

-组成合唱团  敏锐的逻辑能力
    -choir 数组
    -duck  对象用对象字面量来表达
    -加入合唱团应该写成一个方法 直觉  封装能力
        joinChoir封装成一个方法 抽象的思想
            形参，任何人可以来报名  animal && typeof animal.duckSing =='function'
    -鸭子模型  深入的语言能力
       JS是弱类型，不需要声明类型，一个{}就是一个对象
       JS里不是传统的面向对象（class Duck）看书
       基于原型式的面向对象 （）         
       Object.prototype.toString.call(choir)可以展示choir是对象中的数组类型，数组是对象的子类型'[object Array]'
       JS中除了简单数据类型，其他都是对象
       Object.prototype.toString.call(duck)
       '[object Object]'
       Object.prototype.toString.call(duck.duckSing)
       '[object Function]'
    -JS才是最面向对象的面向对象
      除了简单数据类型一切都是对象
      -如何区分不同类型的对象？
      Object.prototype.toString.call()
