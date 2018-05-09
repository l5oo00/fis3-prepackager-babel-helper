# fis3-prepackager-babel-helper

A prepackager plugin for fis3 when using babel-plugin-external-helpers plugin.

---

使用 [babel-plugin-external-helpers](https://www.npmjs.com/package/babel-plugin-external-helpers) 时， 可以使用 [fis3-preprocessor-babel-helper](https://github.com/l5oo00/fis3-preprocessor-babel-helper) 自动提取依赖的 `helper`, 并自动注入`require`语句， 然后使用此插件自动生成 `babel_helper.js` 文件。

### Install

```shell
npm install fis3-prepackager-babel-helper --save-dev
```

### Add configure to fis-conf.js


```javascript
fis.match('::package', {
    prepackager: fis.plugin('babel-helper', {
        helperFilePath: 'widget/babel_helpers.js',  // 生成的 babel_helpers.js 文件 路径
    })
});

// 编译后， 会自动在发布目录下对应的目录里生成 babel_helpers.js 文件
```


Thanks [fisx-prepackager-babel](https://github.com/fisx-suite/fisx-prepackager-babel)。
