keywd=function y(e) {
    return d(f(p(t = m(e)), 8 * t.length));
};
function p(e) {
    var t, n = [];
    for (n[(e.length >> 2) - 1] = void 0,
             t = 0; t < n.length; t += 1)
        n[t] = 0;
    var r = 8 * e.length;
    for (t = 0; t < r; t += 8)
        n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
    return n
};
function v(e, t, n) {
    return t ? n ? g(t, e) : h(g(t, e)) : n ? y(e) : h(y(e))
};
function d(e) {
    var t, n = "", r = 32 * e.length;
    for (t = 0; t < r; t += 8)
        n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
    return n
};
function m(e) {
    return unescape(encodeURIComponent(e))
};
function f(e, t) {
    var n, r, a, o, f;
    e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
    var d = 1732584193
        , p = -271733879
        , h = -1732584194
        , m = 271733878;
    for (n = 0; n < e.length; n += 16)
        p = c(p = c(p = c(p = c(p = u(p = u(p = u(p = u(p = s(p = s(p = s(p = s(p = l(p = l(p = l(p = l(a = p, h = l(o = h, m = l(f = m, d = l(r = d, p, h, m, e[n], 7, -680876936), p, h, e[n + 1], 12, -389564586), d, p, e[n + 2], 17, 606105819), m, d, e[n + 3], 22, -1044525330), h = l(h, m = l(m, d = l(d, p, h, m, e[n + 4], 7, -176418897), p, h, e[n + 5], 12, 1200080426), d, p, e[n + 6], 17, -1473231341), m, d, e[n + 7], 22, -45705983), h = l(h, m = l(m, d = l(d, p, h, m, e[n + 8], 7, 1770035416), p, h, e[n + 9], 12, -1958414417), d, p, e[n + 10], 17, -42063), m, d, e[n + 11], 22, -1990404162), h = l(h, m = l(m, d = l(d, p, h, m, e[n + 12], 7, 1804603682), p, h, e[n + 13], 12, -40341101), d, p, e[n + 14], 17, -1502002290), m, d, e[n + 15], 22, 1236535329), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 1], 5, -165796510), p, h, e[n + 6], 9, -1069501632), d, p, e[n + 11], 14, 643717713), m, d, e[n], 20, -373897302), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 5], 5, -701558691), p, h, e[n + 10], 9, 38016083), d, p, e[n + 15], 14, -660478335), m, d, e[n + 4], 20, -405537848), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 9], 5, 568446438), p, h, e[n + 14], 9, -1019803690), d, p, e[n + 3], 14, -187363961), m, d, e[n + 8], 20, 1163531501), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 13], 5, -1444681467), p, h, e[n + 2], 9, -51403784), d, p, e[n + 7], 14, 1735328473), m, d, e[n + 12], 20, -1926607734), h = u(h, m = u(m, d = u(d, p, h, m, e[n + 5], 4, -378558), p, h, e[n + 8], 11, -2022574463), d, p, e[n + 11], 16, 1839030562), m, d, e[n + 14], 23, -35309556), h = u(h, m = u(m, d = u(d, p, h, m, e[n + 1], 4, -1530992060), p, h, e[n + 4], 11, 1272893353), d, p, e[n + 7], 16, -155497632), m, d, e[n + 10], 23, -1094730640), h = u(h, m = u(m, d = u(d, p, h, m, e[n + 13], 4, 681279174), p, h, e[n], 11, -358537222), d, p, e[n + 3], 16, -722521979), m, d, e[n + 6], 23, 76029189), h = u(h, m = u(m, d = u(d, p, h, m, e[n + 9], 4, -640364487), p, h, e[n + 12], 11, -421815835), d, p, e[n + 15], 16, 530742520), m, d, e[n + 2], 23, -995338651), h = c(h, m = c(m, d = c(d, p, h, m, e[n], 6, -198630844), p, h, e[n + 7], 10, 1126891415), d, p, e[n + 14], 15, -1416354905), m, d, e[n + 5], 21, -57434055), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 12], 6, 1700485571), p, h, e[n + 3], 10, -1894986606), d, p, e[n + 10], 15, -1051523), m, d, e[n + 1], 21, -2054922799), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 8], 6, 1873313359), p, h, e[n + 15], 10, -30611744), d, p, e[n + 6], 15, -1560198380), m, d, e[n + 13], 21, 1309151649), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 4], 6, -145523070), p, h, e[n + 11], 10, -1120210379), d, p, e[n + 2], 15, 718787259), m, d, e[n + 9], 21, -343485551),
            d = i(d, r),
            p = i(p, a),
            h = i(h, o),
            m = i(m, f);
    return [d, p, h, m]
};
function c(e, t, n, r, a, i, l) {
    return o(n ^ (t | ~r), e, t, a, i, l)
};
function i(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}
function o(e, t, n, r, a, o) {
    return i((l = i(i(t, e), i(r, o))) << (s = a) | l >>> 32 - s, n);
    var l, s
}
function l(e, t, n, r, a, i, l) {
    return o(t & n | ~t & r, e, t, a, i, l)
}
function s(e, t, n, r, a, i, l) {
    return o(t & r | n & ~r, e, t, a, i, l)
}
function u(e, t, n, r, a, i, l) {
    return o(t ^ n ^ r, e, t, a, i, l)
}
/////////////////////////////////////
token=function h(key) {
    var t, n, r = "0123456789abcdef", a = "";
    for (n = 0; n < key.length; n += 1)
        t = key.charCodeAt(n),
            a += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
    return a
};
var kw="ctu"+"can"+"Onewayduew&^%5d54nc'KH";

///ctu是起飞机场代码（ctu是成都），can是降落机场代码（can是广州）.根据需要更改
///http://airport.anseo.cn/c-china    附：国内机场三字代码

function jiemi(kw) {
    keys=keywd(kw);
    return token(keys)
};


