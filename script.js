function fadeIn(element) {

  var op = 0.1;

  var timer = setInterval(function(){

    if (op >= 1) {  // opacity is maximum
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op + ')';

    op += op * 0.1;

  }, 50);

}

function didLoad() {
  var contentTitle = document.querySelector(".content > #content-title");
  fadeIn(contentTitle);
}

window.addEventListener("load", didLoad, true);
