## Vendor
MarkDown Loader

## Installation
```js
yarn add -D @mbvue/markdown-loader
```

## Styles:
```js
import '@mbvue/markdown-loader/style.css';
```

## Demo:
```css
import DemoBlock from '@mbvue/markdown-loader/demo-block.vue';

app.component('demo-block', DemoBlock);
```

## Usage
```js
webpack.config.js：

module.exports = {
    module: {
        rules: [
            { test: /\.md$/, use: [{ loader: 'vue-loader' }, { loader: '@mbvue/markdown-loader' }] }
        ]
    }
};
```

```html
:::tip
Content
:::

:::warning
Content
:::

:::danger
Content
:::

:::demo html

<menu>menu<menu>
:::
```
