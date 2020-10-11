const Koa = require('koa');
const app = new Koa();

// 中间件，添加 body
app.use(async ctx => {
    // console.log('ctx:', ctx);
    // console.log('ctx.request:', ctx.request);
    // console.log('ctx.response:', ctx.response);
    // console.log('ctx.req:', ctx.req);
    // console.log('ctx.res:', ctx.res);
    ctx.body = 'hello koa'
});

// 错误事件侦听
app.on('error', (err, ctx) => {
    log.error('server error', err, ctx);
});

// 绑定 3000 端口
app.listen(3000);
