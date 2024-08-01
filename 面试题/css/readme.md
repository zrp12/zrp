# 1.说说你对css盒子模型的理解？
- 是什么
浏览器在渲染页面时。会将容器渲染成包含content、padding、border、margin四部分的矩形

- 特点
1. 标准盒模型：width = content (width、height只包含content)
2. IE盒模型: width = content + padding + border (width、height包含content、padding、border)

- 切换方法
    box-sizing: content-box; // 标准盒模型
    box-sizing: border-box; // IE盒模型

# 2. css中的选择器有哪些？优先级？
1. id选择器
2. 类名选择器
3. 标签选择器
4. 后代选择器
5. 子集选择器
6. 兄弟选择器
7. 群组选择器
!important > 行内样式 > id > 类名 > {后代，子集，兄弟} > 标签 
8. 属性选择器
9. 伪类选择器
10. 伪元素选择器

# 3. 说说em、rem、vw、vh、px的区别？
- 是什么
css3之前 px，em，%用的多。css3创建了新的单位 rem，vw，vh，为了在不同的场景下做更好的适配

- 区别
    1. 绝对单位：px
    2. 相对单位：em、rem、vw、vh

# 4. css中有哪些方式可以隐藏一个元素，区别（是否占据文档流）？
1. display:none;             无文档流，不触发事件，会回流重绘
2. opacity:0;                有文档流，会触发事件，不会回流（计算页面的布局），会重绘
3. width:0; height:0;        无文档流，不触发事件，会回流重绘
4. visibility:hidden;        有文档流，不触发事件，不会回流，会重绘
5. clip-path: polygon(0px,0px,0px,0px)               有文档流，不触发事件，不会回流，会重绘

# 5. 谈谈你对BFC的理解？
- 是什么
    BFC 叫做块级格式化上下文，是一种特殊的容器，拥有一套自己的渲染规则。

- 规则
    1. BFC容器内部子容器依旧遵从块级、行内块、行内的排列
    2. BFC在计算高度时，会将浮动元素的高度也计算在内。（清除浮动）
    3. BFC容器的 margin-top 不会跟子容器的 margin-top 重叠。

- 触发条件
    1. overflow: hidden || xxx;
    2. float: left || right;
    3. display: table-xxx || inline-xxx || flex || grid;
    4. position: absolute || fixed;

- 应用场景
    1. 清除浮动
    2. 防止margin重叠


# 6. 元素水平垂直居中的方法有哪些？
块级元素水平居中 margin：0 auto;
非块级(子容器为行内块)：text-align: center;
- 已知父子容器宽高:
    1. margin (不优雅)

- 未知父容器，已知子容器:
    1. margin + calc(父容器 - 子容器)
    2. position + margin负值
    3. position + margin: auto;

- 未知父子容器宽高
    1. position + transform
    2. flex + align-items + justify-content
    3. grid
    4. table-cell + vertical-align: middle; + text-align: center;

# 7. 说说flexbox
- 是什么
    弹性布局是css中一种简便高效的布局方式，弹性布局中有主轴（默认为x轴）和交叉轴（Y轴）的概念，主轴的方向也可以修改，子容器默认在主轴上排列。

- 属性
    在父容器
    在子容器

- 应用场景
    1. 三栏布局
    2. 水平垂直居中

# 8. 如何实现三栏布局
    1. 弹性布局
    2. 浮动布局 （圣杯、双飞翼）
    3. grid
    4. table
    5. position

# 9. css3新增了哪些属性？
1. border-radius
2. box-shadow
3. border-image
4. 背景
5. 动画 transition
6. 过渡 animation
7. transform
8. 渐变

# 10. css 画三角形,梯形 
1. clip-path: polygon(0px,0px,0px,0px);

# 11. 画一条0.5px的线
1. transform: scale(0.5);
2. 



