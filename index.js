const markdown = require('markdown-it');
const emoji = require('markdown-it-emoji');
const anchor = require('markdown-it-anchor');
const { slugify } = require('transliteration');
const toc = require('markdown-it-table-of-contents');
const highlight = require('./highlight');
const containers = require('./containers');

const parser = markdown({
    html: true, //在源码中启用 HTML 标签
    langPrefix: 'language-', //给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用
    highlight: function (str, lang) { return highlight(parser, str, lang); } //高亮函数，会返回转义的 HTML
})
.use(emoji) //使用 emoji 插件渲染 emoji
.use(anchor, { level: [2, 3], permalink: true, slugify: slugify, permalinkSymbol: '#' }) //使用 anchor 插件为标题（h2, h3）元素添加锚点
.use(toc, { includeLevel: [2, 3], slugify: slugify }); //标题（h2, h3）自动生成目录

parser.use(containers(parser)); // 定义自定义的块容器

module.exports = function (source) {
    this.cacheable && this.cacheable(); //缓存
    
    const render = parser.render(source + `[[toc]]`); //追加左侧目录

    return `<template><div class="markdown-content">${render}</div></template>`;
};
