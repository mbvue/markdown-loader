## Vendor
MarkDown Loader

## Installation
yarn add -D @mbvue/markdown-loader

## Styles:
import '@mbvue/markdown-loader/style.css';

## Demo:
import DemoBlock from '@mbvue/markdown-loader/demo-block.vue';
app.component('demo-block', DemoBlock);

## Usage
webpack.config.js：

module.exports = {
    module: {
        rules: [
            { test: /\.md$/, use: [{ loader: 'vue-loader' }, { loader: '@mbvue/markdown-loader' }] }
        ]
    }
};

:::tip
Tip
:::

:::warning
Warning
:::

:::danger
Danger
:::

:::demo
&lt;menu&gt;menu&lt;/menu&gt;
:::
