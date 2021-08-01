## 概要

CSS （Cascading Style Sheets，层叠样式表）是用来控制网页在浏览器中的显示外观的声明式语言。标准CSS文件以（.css）作为文件后缀

## 基础语法

```css
/* 选择器: { 属性：值 } */
body {
  font-size: 12px;
  color: #000;
}
```

## 语法描述

1. 选择器: 匹配文档中的元素，如
   * 按元素：div, a[title] p, a,...
   * 按属性：div.class, .class, #id, div#id
   *  按关系：div > p, div p, div:first-child, div + p, div ~ p...
   * 按状态：a:hover, div:after,...
   * 通配符：*

2. 属性:值：
   * width: 100%;
   * height: calc(100vh - 10px);
   * border: 2px solid yellow;
   * color: white;
   * background-color: darkred;
   * padding: 0.8em 0.8em 0.6em;
   * transform: rotate(0.8turn);
   * ...

## 嵌入到HTML

1. 外部样式表，在\<head>中插入\<link rel="stylesheet" href="styles.css">

2. 内部样式表，在\<head>中插入\<style>...\</style>

3. 内联样式: 在元素的style属性中插入：\<div style="width:100px;backgroud-color: #f60;">\</div>

## 如何工作

![css](~@images/css.svg)

## 优先级

1. 一个元素选择器不是很具体 — 会选择页面上该类型的所有元素 — 所以它的优先级就会低一些。

2. 一个类选择器稍微具体点 — 它会选择该页面中有特定 class 属性值的元素 — 所以它的优先级就要高一点。

3. 三要素
   * 重要程度
   * 优先级: 选择器的权重决定优先级
   * 资源顺序: 后面的规则覆盖前面的规则，直到最后一个开始设置样式

4. 分值计算

![分值计算](~@images/selector-score.png)



5. !important: 覆盖所有优先级计算

## 盒模型

### 盒子类型

1. 块级盒子（Block Box）
   * 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
   * 每个盒子都会换行
   * width 和 height 属性可以发挥作用
   * 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

<img src="~@images/block-box.png">

2. 内联盒子（Inline Box）
   * 盒子不会产生换行。
   * width 和 height 属性将不起作用。
   * 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。
   * 水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。


<img src="~@images/inline-box.png">


### 盒模型

<img src="~@images/box.png" width="400" height="200" style="margin-top: 10px">

#### 标准盒模型（box-sizing: content-box）

<img src="~@images/content-box.png" width="400" height="200" style="margin-top: 10px">

#### 替代（IE）盒模型（box-sizing: content-box）

<img src="~@images/border-box.png" width="400" height="200" style="margin-top: 10px">

## 常用布局

### 水平、垂直居中
* 绝对定位，绝对偏移
* inline化，文本居中，设置行高
* flex
* ...

### N宫格盒子hover边框高亮效果
<img src="~@images/n-box-hover.png" width="400" height="400" style="margin-top: 10px">

## 常用动画
渐变、移动、旋转、缩放
