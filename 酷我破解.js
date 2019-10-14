var n, o, h = 0, d = 0;
var t={};
 var zjy = function(t, e, r) {
    var i = 0
        , b = []
        , f = [255, 183, 70, 196, 147, 28]
        , v = 13635;
    var y = void 0 !== t.msecs ? t.msecs : (new Date).getTime()
        , w = void 0 !== t.nsecs ? t.nsecs : d + 1
        , dt = y - h + (w - d) / 1e4;
    if (dt < 0 && void 0 === t.clockseq && (v = v + 1 & 16383),
    (dt < 0 || y > h) && void 0 === t.nsecs && (w = 0),
    w >= 1e4)
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    h = y,
        d = w,
        o = v;
    var A = (1e4 * (268435455 & (y += 122192928e5)) + w) % 4294967296;
    b[i++] = A >>> 24 & 255,
        b[i++] = A >>> 16 & 255,
        b[i++] = A >>> 8 & 255,
        b[i++] = 255 & A;
    var T = y / 4294967296 * 1e4 & 268435455;
    b[i++] = T >>> 8 & 255,
        b[i++] = 255 & T,
        b[i++] = T >>> 24 & 15 | 16,
        b[i++] = T >>> 16 & 255,
        b[i++] = v >>> 8 | 128,
        b[i++] = 255 & v;
    for (var x = 0; x < 6; ++x)
        b[i + x] = f[x];
    return b
};
function jiami () {
    for (var r = [], i = 0; i < 256; ++i)
        r[i] = (i + 256).toString(16).substr(1);
    return r;
};
function sv(t,r) {
    var i = 0
        , n = r;
    return [n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]]].join("")
};

//////////////

var keys=function () {
    var e=zjy(t);
    var r=jiami();
    return sv(e,r);

};
console.log(keys());