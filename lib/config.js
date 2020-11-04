const { slugify } = require('transliteration');

//默认配置
module.exports = {
    toc: {
        includeLevel: [2, 3], //要使用的标题级别（h2=2）
        containerClass: 'markdown-toc', //class
        slugify: slugify //ID转换
    },
    anchor: {
        level: [2, 3], //要使用的标题级别（h2=2）
        permalink: true, //在标题旁边添加永久链接
        permalinkSymbol: '#', //永久链接锚点中的符号
        permalinkClass: 'markdown-anchor', //class
        slugify: slugify //ID转换
    }
};