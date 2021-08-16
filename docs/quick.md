---
page: true
title: 快速使用
description: 如何使用 fastui
---
## 安装
```shell
npm install -S @vfastui/fastui
```
## 安装和配置插件加速开发
安装 vite-plugin-components
```shell
npm install -D vite-plugin-components
```

在vite.config中配置


```js

import ViteComponents from 'vite-plugin-components'

plugins: [
    vue(),
    WindiCSS(),
    ViteComponents({
        globalComponentsDeclaration: true,
        customComponentResolvers: [
            (name) => {
                if (name.startsWith("FF")) {
                    let partialName = name.slice(2);
                    return {
                        importName: partialName,
                        path: "@vfastui/fastui",
                        sideEffects: `@vfastui/fastui/dist/${partialName.toLowerCase()}/${partialName.toLowerCase()}.css`,
                    };
                }
            },
        ],
    }),
]
```

这样就不用导入也不用注册了

直接在模版中使用 如 `<FFButton> <FFTag>`




