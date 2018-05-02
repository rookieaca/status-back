const Koa = require('koa');
const Router = require('koa-router');

const router = new Router();

router.all('/expect/:code', async (ctx) => {
    ctx.status = parseInt(ctx.params.code, 10);
});

const app = new Koa();

app.use(router.routes());

const port = process.env.PORT || 4006;
const server = app.listen(process.env.PORT || 4006);

server.on('listening', () => {
    console.log(`server listening on port ${port}`);
});
