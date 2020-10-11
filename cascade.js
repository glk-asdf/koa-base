const Koa = require('koa');
const app = new Koa();

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response
app.use(async ctx => {
    ctx.body = 'Hello World';
    console.log('body');
});

app.listen(3000);


/*
每一个 use 都是一个中间件，都会向下嵌套

 body
GET / - 5
X-Response-Time 6ms
body
GET /favicon.ico - 3
X-Response-Time 5ms
*/
