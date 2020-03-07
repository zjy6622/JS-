//1)json
var my_stringify=JSON.stringify;
JSON.stringify=function (params) {
    console.log("string",params);
    return my_stringify(params);
};

var my_parse=JSON.parse;
JSON.parse=function (params) {
    console.log("parse",params);
    return my_parse(params);
};

//2)cookie
var cook_cache=document.cookie;
Object.defineProperty(document,'cookie',{
    get:function () {
        console.log('Getting cookie');
        return cook_cache;
    },
    set:function (val) {
        console.log('Setting cookie',val);
        var cookie=val.split(";")[0];
        var ncookie=cookie.split("=");
        var flag=false;
        var cache=cookie_cache.split(";");
        cache=cache.map(function (a) {
            if(a.split("=")[0]===ncookie[0]){
                flag=true;
                return cookie;
            }
            return a
        })
        cookie_cache=cache.join(";");
        if(!flag){
          cookie_cache+=cookie+";";
        }
        this._value=val;
        return cookie_cache;
    },
});

//3)window attr
var window_flag_1="_t"; //需要hook的window属性
var window_flag_2='ccc'; //需要hook的window.attr的属性

var key_value_map={};
var window_value=window[window_flag_1];

Object.defineProperty(window,window_flag_1, {
    get:function () {
        console.log("Getting",window,window_flag_1,"=",window_value);
        //debugger;
        return window_value;
    },
    set:function (val) {
        console.log("Setting",window,window_flag_1,"=",val);
        //debugger;
        window_value=val;
        key_value_map[window[window_flag_1]]=window_flag_1;
        set_obj_attr(window[window_flag_1],window_flag_2);

    },
});

function set_obj_attr(obj,attr){
    var obj_attr_value=obj[attr];
    Object.defineProperty(obj,attr,{
        get:function () {
            console.log("Getting",key_value_map[obj],attr,"=",obj_attr_value);
            //debugger;
            return obj_attr_value;
        },
        set:function (val) {
            console.log("Setting",key_value_map[obj],attr,"=",val);
            obj_attr_value=val;
        },
    });
}

//4)eval function
window._cr_eval=window.eval;
var myeval=function (src) {
    console.log(src);
    console.log("============eval end==============");
    return window._cr_eval(src)
};
var _myeval=myeval.bind(null);
_myeval.toString=window._cr.eval.toString;
Object.defineProperty(window,'eval',{value:_myeval});

window._cr_fun=window.Function;
var myfun=function () {
    var args=Array.prototype.slice.cell(arguments,0,-1).join(","),src=arguments[arguments.length-1];
    console.log(src);
    console.log("===========Function end===========");
    return window._cr_fun.apply(this,arguments)
};
myfun.toString=function () {return window._cr_fun+""};//改回toString方法，防止hook被检测
Object.defineProperty(window,'Function',{value:myfun});

//5)websocket
WebSocket.prototype.senda=WebSocket.prototype.send;
WebSocket.prototype.send=function (data) {
    console.info("Hook WebSocket",data);
    return this.senda(data)
};