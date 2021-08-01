## 概要

HTML（HypeText Markup Language 超文本标记语言） 是一种描述语言，用来定义网页结构。HTML 文件通常会以.htm 或 .html 为扩展名

## 构建最基础的HTML页面

```html
<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Document</title>

</head>

<body>

  内容区域

</body>

</html>
```

## \<!DOCTYPE html>

声明文档类型，历史写法可忽略

## \<html>

这个元素包裹了整个完整的页面，是一个顶级元素（根元素）。属性lang用于设置页面主语言，让使用不同语言的人群更快检索到你的页面

## \<head>

规定文档相关的配置信息（元数据），包括:

* 文档的标题\<title\>

* 引用的文档样式\<link\>

* 脚本\<script\>等

## \<meta>

表示那些不能由其它 HTML 元相关元素表示的元数据

* 规定字符集编码: \<meta charset="utf-8">

* 描述页面作者信息：\<meta name="author" content="sevenlee">

* 描述页面信息：\<meta name="description" content="This is Fe-knowledge-system">

## \<body>

内容显示区域，可包含可显示内容: 文本，图片，音频等，以及不可显示内容: script, link(取决于rel属性是否[body-ok](https://html.spec.whatwg.org/multipage/links.html#body-ok))等。脚本 **document.body** 可获取此元素。

## 元素（标签）

* 不区分大小写

* 包含：开始标签 “<”、 结束标签 “>”、 内容区 “文本或元素”

* 块级与内联
  * 块级：独占一行
  * 内联：嵌入一行，不换行

* 属性值：属性包含元素的额外信息，这些信息不会出现在实际的内容中，如id, 标识标签唯一，可用document.getElementById("id")来获取元素
