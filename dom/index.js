import DemoBlock from './DemoBlock';

DemoBlock.install = function (app) {
    app.component('demo-block', DemoBlock);
};

export default DemoBlock;