const path = require('path');
const express = require('express');
const app = express();
app.listen(3007, ()=> console.log('服务开启了'))
app.use('/api', require(path.join(__dirname,'routers','/login')));
app.use('/my', require(path.join(__dirname,'routers','/user')));
app.use('/my/article', require(path.join(__dirname,'routers','/article')));
app.use('/my/article', require(path.join(__dirname,'routers','/catogery')));