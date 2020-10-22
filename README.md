## Vendor
MarkDown Loader

## Installation
yarn add -D @mbvue/markdown-loader

## Styles:
@mbvue/markdown-loader/style.css

## Demo:
@mbvue/markdown-loader/demo-block.vue

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
<menu>menu</menu>
:::
