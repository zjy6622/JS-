genPvid = function() {
    var a = (new Date).getTime();
    var b = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(b) {
        var c = (a + 16 * Math.random()) % 16 | 0;
        return a = Math.floor(a / 16),
            ("x" == b ? c : 3 & c | 8).toString(16)
    });
    return b
};
// console.log(genPvid());