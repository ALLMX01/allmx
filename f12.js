document.onkeydown = function(){

  if(window.event && window.event.keyCode == 123) {
    window.location="about:blank"; //将当前窗口跳转置空白页
    event.keyCode=0;
    event.returnValue=false;
  }
  if(window.event && window.event.keyCode == 13) {
    window.event.keyCode = 505;
  }
  if(window.event && window.event.keyCode == 8) {
    alert(str+"n请使用Del键进行字符的删除操作！");
    window.event.returnValue=false;
  }
}
