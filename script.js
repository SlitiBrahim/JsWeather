function fadeIn(element, isIn) {

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

function scaleAnim(element, newValue, inAnim=true) {  // inAnim -> parameter to know if playing an mouseover anim

  const defaultIncrementor = 0.01;
  var incrementor = (inAnim ? defaultIncrementor : -defaultIncrementor);
  var a = 0;

  var timer = setInterval(function(){

    a = 1+incrementor;

    if ((inAnim && a >= newValue) || (!inAnim && a <= 1)) { // End if new Value is reached for inAnim, or end if default scale (1) is reached
      clearInterval(timer);
    }

    scale(element, a);
    incrementor += (inAnim ? defaultIncrementor : -defaultIncrementor);

  }, 10);

  if (!inAnim) { scale(element, 1); } // reset to default scale -> prevent non ending animation so get back to default scale

}

function scale(element, newValue) {
  element.style.transform = "scale("+newValue+")";
}

function didLoad() {
  var contentTitle = document.querySelector(".content > #content-title");
  var lookforBtn = document.querySelector(".content > #lookfor-btn");

  var overingLookForBtn;
  var outingLookForBtn;
  overingLookForBtn = lookforBtn.addEventListener("mouseover", scaleAnim.bind(true, lookforBtn, 1.04));
  outingLookForBtn = lookforBtn.addEventListener("mouseout", scaleAnim.bind(true, lookforBtn, 1.04, false));

  // fadeIn(contentTitle);
  // setTimeout(fadeIn.bind(null, lookforBtn), 1200);
}

window.addEventListener("load", didLoad, true);
