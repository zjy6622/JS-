const express=require('express');
const app=express();
const node=require('C:\\Users\\zjy\\WebstormProjects\\新浪微博登陆sp参数解密.js');//参数是js文件的位置
// const node=require('./css');
var bodyParser=require('body-parser');
app.use(bodyParser());

app.post('/api',function (req,res) {
    let result=req.body;
    console.log("result",result);
    let a=result.a;//a是返回请求体data中的参数
    // let b=result.b;
    result=node.encrypts(a);
    // console.log(result);
    res.send(result);
});

app.listen(8888,() => {
    console.log('开启服务，端口8888')
});

//module.exports={
//     encrypts
// };
//需要在导入的js文件下加入module.exports属性为加密函数名