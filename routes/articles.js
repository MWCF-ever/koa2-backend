const Router = require('koa-router');
const router = new Router({
    prefix: '/users/articles'
});//prefixed all routers with /usesrs/articles

const bodyParser = require('koa-bodyParser');


//Routes goes here
router.get('/', getAll);
router.get('/: ')