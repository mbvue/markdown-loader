import DemoBlock from './DemoBlock';

DemoBlock.install = function (app, components) {
    DemoBlock.methods.setComponents(components);
    app.component('demo-block', DemoBlock);
};

export default DemoBlock;