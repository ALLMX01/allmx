var check = (function () {
    var callbacks = [], timeLimit = 2, open = false;
    setInterval(loop, 2);
    return {
        addListener: function (fn) {
            callbacks.push(fn);
        },
        cancleListenr: function (fn) {
            callbacks = callbacks.filter(function (v) {
                return v !== fn;
            });
        }
    }
    function loop() {
        var startTime = new Date();
        debugger;

        if (new Date() - startTime > timeLimit) {
            if (!open) {
                callbacks.forEach(function (fn) {
                    fn.call(null);
                });
            }
            open = true;
        } else {
            open = false;
        }
    }
})();

check.addListener(function () {
    //alert('Open Devtool');
});
