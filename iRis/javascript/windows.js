// Update the time box in the start bar every 10 seconds

function updateMenuTime(){
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
  
  setInterval(updateMenuTime, 1000);
  
  // Store the necessary objects
  
  var startButton = document.querySelector(".start__button");
  
  var startMenu = document.querySelector(".start__menu-main");
  
  var body = document.querySelector("body");
  
  let programsItem = document.querySelector(".start__menu-main-items-item-programs");
  
  let programsMenu = document.querySelector("start__menu-sub-items-item-sub__programs-items");
  
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
  
  // Make the desktop icons draggable
  
  var desktopIcons = document.getElementsByClassName("desktop-icon");
  
  for (let i = 0; i < desktopIcons.length; i++) {
    dragElement(desktopIcons[i]);
  }
  
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