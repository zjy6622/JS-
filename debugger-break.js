//浏览器console中执行下代码
//解决无限debugger的问题，不用再去寻找debugger函数入口，但只在部分浏览器适用
if((function(){}).constructor===Function){
    Function.prototype.constructor=function () {};
    alert('成功')
}else{
    alert('失败')
};