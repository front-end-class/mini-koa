const Application = require('./Application.js');
const app = new Application();
// 中间件 1
app.use(async(ctx, next) => {
    console.log('欢迎订阅，')
    await next();
    console.log('到进阶')
    ctx.body = 'print to body';
});
// 中间件 2
app.use(async(ctx, next) => {
    console.log('Uniapp')
    await next();
    console.log('从入门')
});
app.listen(3000, () => {
    console.log('启动 http://localhost:3000')
});