const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser'); 
const app = new Koa();
const router = new Router();
const userRouter = new Router({
  prefix: '/users'
});

//app.use((ctx) => {
//  ctx.body = 'everything will be fine';
//});

router.get('/', (ctx) =>{
  ctx.body = 'Home page!';
}); 

userRouter.get('/', (ctx) =>{
  ctx.body = 'This is user page!'
});

userRouter.post('/', (ctx)=> {
  ctx.body = 'Create user';
}); 

userRouter.get('/:id', (ctx) => {
  ctx.body = `This is Users ${ctx,params.id}`;
});

app.use(router.routes());
app.use(userRouter.routes());

app.listen(3000);
