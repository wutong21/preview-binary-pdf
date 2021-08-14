# 预览PDF（可传二进制ArrayBuffer数据）

## 安装

```sh
npm install is-null-string
```
## 引用

```JavaScript
import PreviewBinaryPdf from 'preview-binary-pdf'
Vue.use(PreviewBinaryPdf)
```

```html
<preview-binary-pdf url="url" :data="data">
```
# 参数
|参数|说明|类型|可选值|默认值
|:---|---|---|---|---|
| `url`|PDF链接地址|`String`|--|""|
| `width`|宽度|`String`|--|`100%`|
| `height`|高度|`String`|--|`100vh`|
| `scrolling`|滚动条样式|`String`|`auto\yes\no`|`auto`|
| `type`|文件类型|`String`|--|`application/pdf;charset=utf-8`
| `data`|PDF二进制数据|`ArrayBuffer`|--|`null`

# 说明
url和data两个参数二选一