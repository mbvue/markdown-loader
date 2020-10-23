const container = require('markdown-it-container');
const highlight = require('./highlight');

//生成模块代码
function createContainer (cls) {
  return [container, cls, {
    render: function (tokens, idx) {
        return tokens[idx].nesting === 1 ? `<div class="${cls}">` : `</div>`
    }
  }];
};

module.exports = function (parser) {
    return function (compile) {
        compile
        .use(...createContainer('tip')) //一般提示模块
        .use(...createContainer('warning')) //警告提示模块
        .use(...createContainer('danger')) //危险提示模块
        .use(container, 'v-pre', { render: function (tokens, idx) { return tokens[idx].nesting === 1 ? `<div v-pre>` : `</div>`; } }) //v-pre
        //demo
        .use(container, 'demo', {
            render: function(tokens, idx) {
                if(tokens[idx].nesting === 1){
                    let info = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                    let description = info && info.length > 1 ? info[1] : 'js';

                    return `<demo-block><template v-slot:highlight>${highlight(parser, tokens[idx + 1].content, description)}</template><template v-slot:source>`;
                }else{
                    return `</template></demo-block>`;
                }
            }
        });
    };
};
