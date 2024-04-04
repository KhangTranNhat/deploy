const homeRouter = require('./pages/home.router')
const introduceRouter = require('./pages/introduce.router')
const productRouter = require('./pages/product.router')
const contactRouter = require('./pages/contact.router')
const newsRouter = require('./pages/news.router')

let initWebRouters = (app) => {
    app.use('/', homeRouter);
    app.use('/introduce', introduceRouter);
    app.use('/product', productRouter);
    app.use('/contact', contactRouter);
    app.use('/news', newsRouter);

}

module.exports = initWebRouters;