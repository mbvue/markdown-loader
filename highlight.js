const hljs = require('highlight.js');

//高亮渲染
module.exports = function (parser, str, lang) {
    if (lang && hljs.getLanguage(lang)) {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
    }

    return `<pre v-pre class="hljs"><code>${parser.utils.escapeHtml(str)}</code></pre>`;
}