function mAlert() {
    var fn = function () {};
    fn.toString = function () {
        window.location = 'about: blank';
        console.log("呵呵");
    }
    console.log("%c", fn);//请不要删除这行
};mAlert();