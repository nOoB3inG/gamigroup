document.getElementById('head').addEventListener("mouseover",dim);
function dim() {
  var x = document.getElementById('wowslider-container1');
  x.style.WebkitFilter="brightness(60%)";
}

document.getElementById('head').addEventListener("mouseout",undim);
function undim() {
  var x = document.getElementById('wowslider-container1');
  x.style.WebkitFilter="";
}

// Loading
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.visibility = value ? 'visible' : 'hidden';
      document.getElementById(id).style.opacity = value ? '1' : '0';
}

onReady(function () {
  show('page',true);
  show('loading',false);
});


// scroll
window.addEventListener("scroll",scrollEvent);
function scrollEvent() {
  var about= document.getElementById('abt');
  var us= document.getElementById('us');
  var abtContain = document.getElementById('about-us');
  var head = document.getElementById('head');
  var project= document.getElementById('proj');
  var projTitle = document.getElementById('projTitle');
  var mainQuote = document.getElementById('quote');
  var info = document.getElementById('info');
  var para = document.getElementById('para');
  var cont = document.getElementById('cont');
  var gamiWeb = document.getElementById('gamiweb');
  var ypos = window.pageYOffset;
        if (ypos > 500) {
          about.style.left="0";
          abtContain.style.opacity="1";
        }
        else {
          about.style.left="-50%";
          abtContain.style.opacity="0";
        }
        if (ypos > 600) {
          us.style.right="3%";
        }
        else {
          us.style.right="-50%";
        }
        if (ypos > 800) {
          head.classList.add('header-fixed');
          gamiWeb.style.opacity="1";
          gamiWeb.style.letterSpacing="12px";
        }
        else {
          head.classList.remove('header-fixed');
          gamiWeb.style.opacity="";
          gamiWeb.style.letterSpacing="";
        }

        if (ypos > 1000){
          project.style.left="0%";
          projTitle.style.letterSpacing="7px";
        }
        else {
          project.style.left="";
          projTitle.style.letterSpacing="20px";
        }
        if (ypos > 1600) {
          mainQuote.style.top="70px";
        } else {
          mainQuote.style.top="-50px";
        }
          if (ypos > 1750){
            info.style.opacity="1";
            info.style.top="20%";
            document.getElementById('flat').innerHTML="10000";
            document.getElementById('happy').innerHTML="12588";
            document.getElementById('progress').innerHTML="90000";
            $('.count').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
          }
          else {
            info.style.opacity="0";
            info.style.top="0%";
        }
          if (ypos > 1900){
              para.style.opacity="1";

          }
          else{
              para.style.opacity="0";
          }
          if (ypos > 2250) {
            cont.style.right="-120px";
          }
          else {
            cont.style.right="-100%";
          }

      }
