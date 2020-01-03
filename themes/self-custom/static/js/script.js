var width = document.body.clientWidth;
var contentSecInitWidth = $('#contentSection').width();

$( document ).ready(function() {

  $(window).resize(function(){
    width = document.body.clientWidth;

    contentSecInitWidth = $('#contentSection').width();

    if(sessionStorage.getItem('Window Mode') === 'Maximized') {
      MaxContentSection();
     } 

    if(sessionStorage.getItem('Window Mode') === 'Minimized') {
      changeWidthToMin();
    }

  });

  if(sessionStorage.getItem('Window Mode') === 'Maximized') {
    MaxContentSection();
  }

});

const darkLightMode = document.getElementById('darkLightMode');
const bulbIcon = document.getElementById('bulbIcon');
const body = document.getElementsByTagName("body");
var csslinks = document.getElementsByTagName("link");
  
darkLightMode.addEventListener("click", function() {

  let location = window.location.origin;

  if(localStorage.getItem('Color Mode') === 'Dark') {
    csslinks[3].href = location + "/css/light.min.css";  
    $(bulbIcon).removeClass('lightbulb icon');
    $(bulbIcon).addClass('lightbulb outline icon');
 
    localStorage.setItem('Color Mode','Light');

  } else if (localStorage.getItem('Color Mode') === 'Light') {

  csslinks[3].href = location + "/css/dark.min.css"; 
  $(bulbIcon).removeClass('lightbulb outline icon');
  $(bulbIcon).addClass('lightbulb icon'); 

  localStorage.setItem('Color Mode','Dark');
   
  } else {
    csslinks[3].href = location + "/css/dark.min.css";   
    localStorage.setItem('Color Mode','Dark');   
  }

});


// Initalize tabular elements on the CV section
$('.menu .item')
.tab();

// Adjust Scroll-to-Top button visibility
window.onscroll = function() {
	scrollFunction();
};


const mainMenu = document.getElementById('mainMenu');
const contentSection = document.getElementById('contentSection');
const MaxMinContentSectionBtn = document.getElementById('MaxMinSecBtn');
const winIcon = document.getElementById('winIcon');
var btnPressed = false;


var iframe = document.getElementsByTagName('iframe');
var gist = document.getElementsByClassName('gist');
var pre = document.getElementsByTagName('pre');


var preCount = document.getElementsByTagName('pre').length;
var gistCount = document.getElementsByClassName('gist').length;
var iframeCount = document.getElementsByTagName('iframe').length;


for (let index = 0; index < preCount; index++) {

  if(pre[index]) {

    var firstChildClass = pre[index].firstChild.className;

    if(firstChildClass === "ui top attached blue label") {
        if(pre[index].getAttribute('data-line')) {
          var lineNumbers = new Array();
          
          var increasedLineNumbers = new Array();
          var lines = pre[index].getAttribute('data-line');

          var delimiterPattern = /([-,])/g;
          
          lines.split(delimiterPattern).forEach(function(element) {

          if(element === '-' || element === ',')
          {
            lineNumbers.push(element);
          } else {
            lineNumbers.push(Number(element) + Number(1));
          }
            
          increasedLineNumbers = lineNumbers;

          });

          pre[index].dataset.line = increasedLineNumbers.join('');

      }
    }
  }
}


function changeWidthToMax() {
    
  var contentSectionWidth = $('#contentSection').width();
  // console.log('Window is maximized! Section Width: ' + contentSectionWidth);

  var sectionWidth = contentSectionWidth - 50;

  if(iframeCount) {
    for (let index = 0; index <= iframeCount; index++) {
      if(iframe[index] != undefined || iframe[index] != null) {
        // iframe[index].setAttribute("style","position: absolute; top: 0; left: 0; width: 100% !important; height: 100%; border:0;");
        if(iframe[index].src.match("vimeo") != undefined || iframe[index].src.match("vimeo") != null) {
          iframe[index].setAttribute("style","position: absolute; top: 0; left: 0; width: 100% !important; height: 100%; border:0;");          
          // console.log(iframe[index].src.match("vimeo"));
        }
        else if (iframe[index].src.match("youtube") != undefined || iframe[index].src.match("youtube") != null) {
          iframe[index].setAttribute("style","position: absolute; top: 0; left: 0; width: 100% !important; height: 100%; border:0;");          
          // console.log(iframe[index].src.match("youtube"));
        }
      }
    }
  }

  if(gistCount){
    for (let index = 0; index < gistCount; index++) {
        gist[index].setAttribute("style", "width: " + sectionWidth + "px !important;");
        // console.log('Gist ' + index + ' ID: ' + gist[index].id + 'Width changed to match maximized screen!' + '\n');
    }
  }


  if(preCount) {

      var dataStart = 0;
      for (let index = 0; index < preCount; index++) {
        
        if(pre[index].getAttribute('data-start') === null){
          dataStart = 0;
        } else {
          dataStart = pre[index].getAttribute('data-start') - 1;          
        }

        pre[index].setAttribute("style","width: " + sectionWidth + "px !important; " + "counter-reset: linenumber " + dataStart +" !important; position: relative;"); 
        // pre[index].setAttribute("style","counter-reset: linenumber " + pre[index].getAttribute('data-start') +" !important"); 
         
      }
    }  
}


function changeWidthToMin() {

  if (window.matchMedia('(min-width: 1200px)').matches)
  {
      if(gistCount){
        for (let index = 0; index < gistCount; index++) {
            gist[index].setAttribute("style", "width: 680px !important;");
            // console.log('Gist ' + index + ' ID: ' + gist[index].id + 'Width changed to match minimized screen!' + '\n');
        }
      }

      if(preCount) {
        
        var dataStart = 0;
        for (let index = 0; index < preCount; index++) {
         
          if(pre[index].getAttribute('data-start') === null){
            dataStart = 0;
          } else {
            dataStart = pre[index].getAttribute('data-start') - 1;          
          }

          pre[index].setAttribute("style","width: 680px !important; " + "counter-reset: linenumber " + dataStart + " !important; position: relative;"); 
        }
      }

  }

  if (window.matchMedia('(min-width: 992px) and (max-width: 1199px)').matches)
  {
      if(gistCount){
        for (let index = 0; index < gistCount; index++) {
            gist[index].setAttribute("style", "width: 551px !important;");
            // console.log('Gist ' + index + ' ID: ' + gist[index].id + 'Width changed to match minimized screen!' + '\n');
        }
      }

      if(preCount) {
        var dataStart = 0;
        for (let index = 0; index < preCount; index++) {

          if(pre[index].getAttribute('data-start') === null){
            dataStart = 0;
          } else {
            dataStart = pre[index].getAttribute('data-start') - 1;          
          }

          pre[index].setAttribute("style","width: 551px !important; " + "counter-reset: linenumber " + dataStart + " !important; position: relative;"); 
        }
      }
  }

  if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches)
  {
      if(gistCount){
        for (let index = 0; index < gistCount; index++) {
            gist[index].setAttribute("style", "width: 430px !important;");
            // console.log('Gist ' + index + ' ID: ' + gist[index].id + 'Width changed to match minimized screen!' + '\n');
        }
      }

      if(preCount) {
        var dataStart = 0;
        for (let index = 0; index < preCount; index++) {

          if(pre[index].getAttribute('data-start') === null){
            dataStart = 0;
          } else {
            dataStart = pre[index].getAttribute('data-start') - 1;          
          }

          pre[index].setAttribute("style","width: 430px !important; " + "counter-reset: linenumber " + dataStart + " !important; position: relative;"); 
        }
      }
  }

  if (window.matchMedia('(max-width: 767px)').matches)
  {
      if(gistCount){
        for (let index = 0; index < gistCount; index++) {
            gist[index].setAttribute("style", "width: 100%; !important;");
            // console.log('Gist ' + index + ' ID: ' + gist[index].id + 'Width changed to match minimized screen!' + '\n');
        }
      }
      
      
      if(preCount) {
        var dataStart = 0;
        for (let index = 0; index < preCount; index++) {

          if(pre[index].getAttribute('data-start') === null){
            dataStart = 0;
          } else {
            dataStart = pre[index].getAttribute('data-start') - 1;          
          }

          pre[index].setAttribute("style","width: 100% !important; " + "counter-reset: linenumber " + dataStart + " !important; position: relative;"); 
        }
      }
  }

}


MaxMinContentSectionBtn.addEventListener("click", function() {

  if(btnPressed) {
    MinContentSection();

  } else {
    MaxContentSection();
  }

});


function MaxContentSection() {
  mainMenu.style.display = "none";

  $(contentSection).removeClass('ten wide column');
  $(contentSection).addClass('sixteen wide column');

  $(winIcon).removeClass('window maximize icon');
  $(winIcon).addClass('window restore icon');

  changeWidthToMax();

  MaxMinContentSectionBtn.dataset.content = "Minimize";

  sessionStorage.setItem('Window Mode','Maximized');
  btnPressed = true;
  // console.log('Window mode: ' + sessionStorage.getItem('Window Mode') + ' | Button pressed: ' + btnPressed);
}

function MinContentSection() {
  
  $(contentSection).removeClass('sixteen wide column');
  $(contentSection).addClass('ten wide column');

  changeWidthToMin();

  mainMenu.style.display = "inline-block";
  
  $(winIcon).removeClass('window restore icon');
  $(winIcon).addClass('window maximize icon');  

  MaxMinContentSectionBtn.dataset.content = "Maximize";

  sessionStorage.setItem('Window Mode','Minimized');
  btnPressed = false;
  // console.log('Window mode: ' + sessionStorage.getItem('Window Mode') + ' | Button pressed: ' + btnPressed);
  // console.log('Window is Minimized! Section Width: ' + contentSecInitWidth);
}


function scrollFunction() {

  if (document.documentElement.scrollTop > 720 || document.body.scrollTop > 720) {

    document.getElementById("myScrollBtn").style.display = "block";

    if(width > 720)
      document.getElementById("stickyMenu").style.display = "block";   

  } else {
    document.getElementById("myScrollBtn").style.display = "none";
    document.getElementById("stickyMenu").style.display = "none";  

  }
}

function getPrevPage() {
  window.history.back();
}

