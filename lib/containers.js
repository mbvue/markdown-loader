const container = require('markdown-it-container');
const highlight = require('./highlight');

//生成模块代码
function createContainer (cls) {
  return [container, cls, {
    render: function (tokens, idx) {
        return tokens[idx].nesting === 1 ? `<div class="markdown-${cls}">` : `</div>`
    }
  }];
};

//获取内容
function getContentToken(tokens, idx, vue) {
    if(!tokens[idx + 1]) return '';
    
    if(tokens[idx + 1].nesting === 1){
        return getContentToken(tokens, idx + 1);
    }else{
        let content = tokens[idx + 1].content;
        if(vue) tokens[idx + 1].content = '';
        return content;
    }
}

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

                    if(description.toLowerCase() === 'vue'){
                        let content = getContentToken(tokens, idx, true);
                        return `<demo-block isComponent="${Buffer.from(content).toString('base64')}"><template v-slot:highlight>${highlight(parser, content, 'js')}`;
                    }else{
                        let content = getContentToken(tokens, idx, false);
                        return `<demo-block><template v-slot:highlight>${highlight(parser, content, description)}</template><template v-slot:source>`;
                    }
                } else {
                    return `</template></demo-block>`;
                }
            }
        });
    };
};
