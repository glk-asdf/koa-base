# koa-base
> [koa](https://www.koajs.com.cn/) 应用是一个包含一系列中间件 generator 函数和对象。  
这些中间件函数基于 request 请求，以一个类似于栈的结构组成并依次执行

## 级联
> 当执行 yield next 语句时，koa 暂停了该中间件，继续执行下一个符合请求的中间件，然后控制权再逐级返回给上层中间件

* 每一个 use 都是一个中间件，都会向下嵌套

## context
> ctx 环境，上下文

* node 的 request 和 response 都封装在了 ctx
    ~~~
    app.use(ctx => {
        ctx;    // context
        ctx.request;    // koa request
        ctx.response;   // koa response
        ctx.req;    // node request
        ctx.res;    // node response
    })
    ~~~
