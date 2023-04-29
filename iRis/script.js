// Update the time box in the start bar every 10 seconds

//keypress to refresh page in case of error


function updateTime(){
  var today = new Date();
  var hours24 = today.getHours();
  var hours12;
  var minutes = today.getMinutes();
  var suffix = '';

  if (hours24 >= 12) {
    suffix = " PM";
    hours12 = hours24 % 12;
  } else {
    suffix = " AM";
    hours12 = hours24;
  }
  
  if (minutes % 10 == 0) {
    //minutes = minutes + "0";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var time = hours12 + ":" + minutes + suffix;

  var timeBox = document.querySelector(".start__time-text");

  timeBox.innerHTML = time;
}

setInterval(updateTime, 1000);

// Store the necessary objects

var startButton = document.querySelector(".start__button");

var startMenu = document.querySelector(".start__menu-main");

var body = document.querySelector("body");

let programsItem = document.querySelector(".programs");
let documentsItem = document.querySelector(".documents");

let programsMenu = document.querySelector(".sub__programs");
let documentsMenu = document.querySelector(".sub__documents");
// Start menu appear on click of start button and disappear on click of start button or anything else except the menu

body.onclick = function(e) {
  for (var i = 0, l = e.target.classList.length; i < l; ++i) {
    if(/start__.*/.test(e.target.classList[i])) {
        break;
    } else {
      startMenu.classList.remove("menu-open");
    }
  }
}

// Show/hide menu on click

function menuDisplay(menu) {
  if (menu.classList.contains("menu-open")) {
    menu.classList.remove("menu-open");
  } else {
    menu.classList.add("menu-open");
  }
}

startButton.addEventListener("click", function() {
  menuDisplay(startMenu);
});

programsItem.addEventListener("click", function() {
  menuDisplay(programsMenu);
});

documentsItem.addEventListener("click", function() {
  menuDisplay(documentsMenu);
});

// Make the desktop icons draggable

var desktopIcons = document.getElementsByClassName("desktop-icon");

for (let i = 0; i < desktopIcons.length; i++) {
  dragElement(desktopIcons[i]);
}
//make player draggable
var windowsPlayer = document.getElementsByClassName("windows-box");

for (let i = 0; i < windowsPlayer.length; i++) {
  dragElement(windowsPlayer[i]);
}
//make lyric box draggable
var lyricBox = document.getElementsByClassName("windows-box-lyrics");

for (let i = 0; i < lyricBox.length; i++) {
  dragElement(lyricBox[i]);
}

//make help box draggable
var helpBox = document.getElementsByClassName("windows-box-lyrics");

for (let i = 0; i < helpBox.length; i++) {
  dragElement(helpBox[i]);
}
//make sm box draggable
var smBox = document.getElementsByClassName("windows-box-sm");

for (let i = 0; i < smBox.length; i++) {
  dragElement(smBox[i]);
}

// to drag element
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Open Windows!!

function openLyricWindow() {
  var box = document.getElementById("pop-up-wrapper"); 
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function openMPWindow() {
  var box = document.getElementById("windows-box"); 
  if (box.style.display === "none") {
    box.style.display = "block";
  }
}
function closeLyricWindow(){
  var box = document.getElementById("pop-up-wrapper"); 
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function openHelpWindow() {
  var box = document.getElementById("help-wrapper"); 
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function closeHelpWindow() {
  var box = document.getElementById("help-wrapper"); 
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}

function openTermWindow() {
  var term = document.getElementById("fullterminal-wrapper"); 
  if (term.style.display === "none") {
    term.style.display = "block";
  } else {
    term.style.display = "none";
  }
}

function closeTermWindow() {
  var term = document.getElementById("fullterminal-wrapper"); 
  if (term.style.display === "none") {
    term.style.display = "block";
  } else {
    term.style.display = "none";
  }
}

const mercykillerLyrics = '<strong>MERCYKILLER</strong><br>'+
'stuck in your daydream, computer screen<br>'+
'i keep my eyes up on the green light i\'ll never be<br>'+
'it\'s like the texture always leaves me<br>'+
'begging for static or fragments of you<br>'+
'i keep pushing the tempo<br>'+
'waiting for answers<br>'+
'digging my nails into your skin as you scream <br>'+
'a kind of music i can\'t write<br>'+
'diagonal red lines<br>'+
'a mercykill when you cut through me <br>'+
'hands that beg for mercy<br> '+
'a tongue that makes me nervous <br>'+
'you keep me secret <br>'+
'digital peace is the only war i sink in <br>'+
'delicately <br>'+
'i\'m a prodigy of thinking, <br>'+
'dynamic breathing or leave me be.<br>'+
'if i could write prolific lines,<br>'+
'i\'d write the code to make you mine <br>'+
'if i wither away, my bones decay <br>'+
'and in the imminent static self-destruct <br>'+
'i fade into the background<br>'+
'if you love me, lock me up<br>'+
'if i\'m fated to emulate then <br>'+
'why not let my memory corrupt?<br>'+
'if he could see me, i could release<br>'+
'every thread that keeps me easy<br>'+
'tied to his hands <br>'+
'i\'m a masterpiece that pleases <br>'+
'every demand, caught by circumstance<br>'+
'so i keep pushing the tempo<br>'+
'and waiting for answers<br>'+
'digging my nails into your skin as you scream <br>'+
'a kind of music i can\'t write <br>'+
'diagonal red lines<br>'+
'a mercykill when you cut through me. <br>'+
'if i could write prolific lines<br>'+
'i\'d write the code to make you mine <br>'+
'if i wither away, my bones decay <br>'+
'and in the imminent static self-destruct <br>'+
'i fade into the background<br>'+
'if you love me, lock me up<br>'+
'if i\'m fated to emulate then <br>'+
'why not let my memory corrupt?<br></br>';
const chemBleedLyrics = 'CHEMICAL BLEED (circles in the dark)';
const sanctuaryLyrics = 'SANCTUARY';
const lyricArray = [mercykillerLyrics, chemBleedLyrics, sanctuaryLyrics];
function popMercykillerLyrics(){
  document.getElementById('lyrics')
  .innerHTML='MERCYKILLER<br>'+
  'stuck in your daydream, computer screen<br>'+
  'i keep my eyes up on the green light i\'ll never be<br>'+
  'it\'s like the texture always leaves me<br>'+
  'begging for static or fragments of you<br>'+
  'i keep pushing the tempo<br>'+
  'waiting for answers<br>'+
  'digging my nails into your skin as you scream <br>'+
  'a kind of music i can\'t write<br>'+
  'diagonal red lines<br>'+
  'a mercykill when you cut through me <br>'+
  'hands that beg for mercy<br> '+
  'a tongue that makes me nervous <br>'+
  'you keep me secret <br>'+
  'digital peace is the only war i sink in <br>'+
  'delicately <br>'+
  'i\'m a prodigy of thinking, <br>'+
  'dynamic breathing or leave me be.<br>'+
  'if i could write prolific lines,<br>'+
  'i\'d write the code to make you mine <br>'+
  'if i wither away, my bones decay <br>'+
  'and in the imminent static self-destruct <br>'+
  'i fade into the background<br>'+
  'if you love me, lock me up<br>'+
  'if i\'m fated to emulate then <br>'+
  'why not let my memory corrupt?<br>'+
  'if he could see me, i could release<br>'+
  'every thread that keeps me easy<br>'+
  'tied to his hands <br>'+
  'i\'m a masterpiece that pleases <br>'+
  'every demand, caught by circumstance<br>'+
  'so i keep pushing the tempo<br>'+
  'and waiting for answers<br>'+
  'digging my nails into your skin as you scream <br>'+
  'a kind of music i can\'t write <br>'+
  'diagonal red lines<br>'+
  'a mercykill when you cut through me. <br>'+
  'if i could write prolific lines<br>'+
  'i\'d write the code to make you mine <br>'+
  'if i wither away, my bones decay <br>'+
  'and in the imminent static self-destruct <br>'+
  'i fade into the background<br>'+
  'if you love me, lock me up<br>'+
  'if i\'m fated to emulate then <br>'+
  'why not let my memory corrupt?<br></br>';

}
function popChemicalBleedLyrics(){
  document.getElementById('lyrics')
  .innerHTML="CHEMICAL BLEED (circles in the dark)<br>"+
  'cut from your conscience<br>' +
  'destructive thing<br>'+
  'my figure hung by threads of electricity<br>'+
  'in empty spaces,<br>'+
  'the veins swell bright.<br>'+
  'so lifelike, her soft side, it keeps me quiet<br>'+
  'a chemical bleed, i\'ll be following<br>'+
  'circles in the dark<br>'+
  'to swallow the feeling<br>'+
  'the current that keeps our worlds apart<br>'+
  'the shaking and reeling,<br>'+
  'mechanical breathing<br>'+
  'bid my blood her counterpart<br>'+
  'fast in the spirit<br>'+
  'an offering<br>'+
  'intrinsic beauty, virulent divinity<br>'+
  'so lifelike, her soft side, it keeps me quiet<br>'+
  'a chemical bleed, i\'ll be following<br>'+
  'circles in the dark<br>' +
  'to swallow the feeling<br>'+
  'the current the keeps our worlds apart.<br>'+
  'the shaking and reeling,<br>'+
  'mechanical breathing<br>'+
  'bid my blood her counterpart.<br>'+
  'and if you love me you\'ll find me<br>'+
  'where i just stare at the ceiling<br>'+
  'it\'s dark and disgusting,<br>'+
  'my kingdom of "nothing here"<br>'+
  'and if you find me hiding<br>'+
  'just searching in plain view i\'m lying<br>'+
  'by swallowing teeth, i\'ll be purple in passing time.<br>'+
  'a chemical bleed, i\'ll be following<br>'+
  'circles in the dark<br>' +
  'to swallow the feeling<br>'+
  'the current the keeps our worlds apart.<br>'+
  'the shaking and reeling,<br>'+
  'mechanical breathing<br>'+
  'bid my blood her counterpart.<br>';
}
function popSanctuaryLyrics(){
  document.getElementById('lyrics')
  .innerHTML="SANCTUARY<br>"+
  'in you and i, there\'s a new land<br>'+
  'angels in flight<br>' +
  '(wonk uoy naht noitceffa erom deen i)<br>'+
  'my sanctuary, my sanctuary, yeah<br>'+
  'where fears and lies melt away<br>'+
  'music will tie what\'s left of me now.<br>'+
  'i watch you fast asleep,<br>'+
  'all i fear means nothing.'+
  'in you and i, there\'s a new land<br>'+
  'angels in flight<br>' +
  '(wonk uoy naht noitceffa erom deen i)<br>'+
  'my sanctuary, my sanctuary, yeah<br>'+
  'where fears and lies melt away<br>'+
  'music will tie what\'s left of me now.<br>'+
  'you show me how to see that nothing is whole<br>'+
  'and nothing is broken.<br>'+
  'in you and i, there\'s a new land<br>'+
  'angels in flight<br>' +
  '(wonk uoy naht noitceffa erom deen i)<br>'+
  'my sanctuary, my sanctuary, yeah<br>'+
  'where fears and lies melt away<br>'+
  'music will tie what\'s left of me now.<br>'+
  'my heart\'s a battleground<br>'+
  '(snoitome eurt deen i)<br>'+
  '(wonk uoy naht noitceffa erom deen i)<br>'+
  '(snoitome eurt deen i)<br>'+
  'in you and i, there\'s a new land<br>'+
  'angels in flight<br>' +
  '(wonk uoy naht noitceffa erom deen i)<br>'+
  'my sanctuary, my sanctuary, yeah<br>'+
  'where fears and lies melt away<br>'+
  'music will tie what\'s left of me now.'

}

function logOnInfo(){
  document.getElementById('helpText')
  .innerHTML='features in development: <br> > chat room <br> > iRis_v3';
}
function termHelpWindow(){
  document.getElementById('term-text')
  .innerHTML='CURRENT ISSUES BEING TRACKED:<br>'+
  '> unable to close terminal<br>'+
  '-----WORKAROUND: refresh, or type "mercykill" to close<br'+
  '> iRis stops mid-sentence<br>'+
  '-----WORKAROUND: type "finish sentence"';
}

function irisTerminalHelp(){
  document.getElementById('helpText')
  .innerHTML='iRis.EXE is a node.js application utilizing an express backend, a terminal jquery library,<br>'+
  'a windows 98 frontend library, and an openai gpt-3 model i fine-tuned with python.<br><br>'+
  'with the exception of openai, most everything built upon is open-source.<br>'+
  'please support those creators: <br>'+
  '> <a href="https://github.com/jcubic/jquery.terminal">jquery terminal</a><br>'+
  '> <a href="https://jdan.github.io/98.css/">windows98</a><br>'+
  '------------------<br>'+
  '> <a href="https://github.com/1ris-exe/web_terminal">my github </a> <br>'+
  'please bare with me as i am not typically a front-end developer :] <br>'+
  'i will post a series of tutorials soon for this site. thank you!';
}
function contact(){
  document.getElementById('helpText')
  .innerHTML='idk probably include my contact info here or something. maybe a form';
}

function openSocialMediaWindow(){
  var box = document.getElementById("socialmedia-wrapper"); 
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function closeSocialMediaWindow(){
  var box = document.getElementById("socialmedia-wrapper"); 
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}

function openStemsWindow(){
  // var box = document.getElementById("stems-wrapper"); 
  // if (box.style.display === "none") {
  //   box.style.display = "block";
  // } else {
  //   box.style.display = "none";
  // }
  console.log("reached");
}






