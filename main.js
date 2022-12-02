var scroll = 0;
var navbars = document.getElementById("navbar");
var upbtn = document.getElementById("upbtn");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop>scroll){
      navbars.style.top = "-200px";
      upbtn.style.display = "block";
    }else{
      navbars.style.top = "0";
    }
    if(scrollTop<scroll){
      upbtn.style.display = 'none';
    }
    scroll = scrollTop;
});

window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i=0;i<reveals.length;i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop<windowheight - revealpoint){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active');
    }
  }
}