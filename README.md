## Installation
```bash
npm install --save-dev @mbvue/markdown-loader
#OR
yarn add -D @mbvue/markdown-loader
```

## Usage
1、webpack.config.js：
```js
module.exports = {
    module: {
        rules: [
            { test: /\.md$/, use: [{ loader: 'vue-loader' }, { loader: '@mbvue/markdown-loader', options: { toc: { ... }, anchor: { ... } } }] }
        ]
    }
};
```

2、main.js：
```js
import Markdom from '@mbvue/markdown-loader/dom';
import '@mbvue/markdown-loader/style/index.less'; //import '@mbvue/markdown-loader/style/index.css';

app.use(Markdom);
```

3、.md：
```html
:::tip
content...
:::

:::warning
content...
:::

:::danger
content...
:::

:::demo html
<div>div</div>
:::
```

## Options
#### toc
If you want to close, please set it to false. Other configuration references: markdown-it-table-of-contents options

#### anchor
If you want to close, please set it to false. Other configuration references: markdown-it-anchor options

