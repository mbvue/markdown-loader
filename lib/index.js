const merge = require('lodash.merge');
const markdown = require('markdown-it');
const emoji = require('markdown-it-emoji');
const anchor = require('markdown-it-anchor');
const toc = require('markdown-it-table-of-contents');
const config = require('./config');
const highlight = require('./highlight');
const containers = require('./containers');

module.exports = function (source) {
    this.cacheable && this.cacheable(); //缓存

    const options = merge(config, this.query || {}); //配置参数
    const parser = markdown({
        html: true, //启用 HTML 标签
        langPrefix: 'language-', //CSS 前缀
        highlight: function (str, lang) { return highlight(parser, str, lang); } //高亮函数
    });

    parser.use(emoji); //渲染 emoji
    if(options.anchor) parser.use(anchor, options.anchor); //为标题添加锚点
    if(options.toc) parser.use(toc, options.toc); //为标题自动生成目录
    parser.use(containers(parser)); // 定义自定义的块容器

    return `<template><div class="markdown-content ${options.toc ? 'markdown-has-toc' : ''}">${parser.render(options.toc ? source + '\n' + '[[toc]]' : source)}</div></template>`;
};