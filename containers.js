const markdown = require('markdown-it');
const highlight = require('./highlight');
const container = require('markdown-it-container');
const parser = markdown({ html: true, langPrefix: 'language-' });

//生成模块代码
function createContainer (cls) {
  return [container, cls, {
    render: function (tokens, idx) {
        return tokens[idx].nesting === 1 ? `<div class="${cls}">` : `</div>`
    }
  }]
}

module.exports = function (compile) {
    compile
    //一般提示模块
    .use(...createContainer('tip'))
    //警告提示模块
    .use(...createContainer('warning'))
    //危险提示模块
    .use(...createContainer('danger'))
    //v-pre
    .use(container, 'v-pre', { render: function (tokens, idx) { return tokens[idx].nesting === 1 ? `<div v-pre>` : `</div>`; } })
    //demo
    .use(container, 'demo', {
        render: function(tokens, idx) {
            if(tokens[idx].nesting === 1){
                return `<demo-block><template v-slot:highlight>${highlight(parser, tokens[idx + 1].content, 'vue')}</template><template v-slot:source>`;
            }else{
                return `</template></demo-block>`;
            }
        }
    })
}
