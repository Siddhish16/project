const windowBars = document.querySelectorAll(".window--menu");
const windows = document.querySelectorAll(".window");
const windowExpands = document.querySelectorAll(".js-expand-window");
const windowCloses = document.querySelectorAll(".js-close-window");
const menuIcons = document.querySelectorAll(".main-menu--link");

let offset;
let mousePosition;
let isDown = false;

function setFocus(el, icon){
  windows.forEach(win =>win.classList.remove("is-focused"));
  menuIcons.forEach(icon => icon.classList.remove("active"));
  icon.classList.add("active");
  el.classList.add("is-focused");
}

function setWindowProps(appWindow){
  let windowProps = {
    x: appWindow.offsetLeft,
    y: appWindow.offsetTop,
    w: appWindow.clientWidth,
    h: appWindow.clientHeight
  };
  
  appWindow.setAttribute('data-x', windowProps.x);
  appWindow.setAttribute('data-y', windowProps.y);
  appWindow.setAttribute('data-w', windowProps.w);
  appWindow.setAttribute('data-h', windowProps.h);
}

function setWindowLocation(appWindow){
    appWindow.style.left = appWindow.dataset.x + 'px';
    appWindow.style.top = appWindow.dataset.y + 'px';
    appWindow.style.width = appWindow.dataset.w + 'px';
    appWindow.style.height = appWindow.dataset.h + 'px';
}


function windowPosDown(e){
  
  let appWindow = this.parentNode;
  
  offset = {
    x: appWindow.offsetLeft - e.clientX,
    y: appWindow.offsetTop - e.clientY
  }

  appWindow.classList.add('is-active');
  
  
  isDown = true;
}

function windowPosUp(){
  isDown = false;
  let allWins = document.querySelectorAll('.window');
  allWins.forEach(wins => wins.classList.remove('is-active'));
}

function moveWindow(e){
  e.preventDefault();
  if(isDown === true){
    let activeWin = document.querySelector('.window.is-active');
    
    mousePosition = {
      x: e.clientX,
      y: e.clientY
    };
    
    activeWin.style.left = (mousePosition.x + offset.x) + 'px';
    activeWin.style.top = (mousePosition.y + offset.y) + 'px';
  }
}

function toggleWindowExpand(e){
  let appWindow = this.closest(".window");
  let toolBarHeight = document.querySelector('.menu-bar').clientHeight;
  if(appWindow.classList.contains("is-expanded")){
    appWindow.classList.remove("is-expanded");
    setWindowLocation(appWindow);
    
  }
  else{
    appWindow.classList.add("is-expanded");
    setWindowProps(appWindow);
    appWindow.style.left = 0;
    appWindow.style.top = 0;
    appWindow.style.width = 100 + 'vw';
    appWindow.style.height = "calc(100vh - " + toolBarHeight + "px)";
  }
}



function toggleWindowFocus(e){
  let appWindow = this.closest('.window');
  let app = appWindow.dataset.app;
  let menuIcon = document.querySelector(".main-menu--link[data-app=" + app + "]");
  setFocus(appWindow, menuIcon);
}



function closeWindow(e){
  let appWindow = this.closest('.window');
  let menuIcon = document.querySelector(".main-menu--link[data-app=" + appWindow.dataset.app + "]");
  let iconProps = {
    x: menuIcon.getBoundingClientRect().left,
    y: menuIcon.getBoundingClientRect().top,
    w: menuIcon.clientWidth,
    h: menuIcon.clientHeight
  };
  
  if(!appWindow.classList.contains('is-expanded')){
    setWindowProps(appWindow);
  }
  
  if(appWindow.classList.contains('is-closed')){
    appWindow.classList.remove('is-closed');
  }
  else{
    appWindow.classList.add('is-closed');
    appWindow.classList.remove('is-focused');
    
    appWindow.style.top = iconProps.y + 'px';
    appWindow.style.left = iconProps.x + 'px';
    appWindow.style.width = iconProps.w + 'px';
    appWindow.style.width = iconProps.h + 'px';
  }
}

function focusWindow(e){
  let app = this.dataset.app;
  let appWindow = document.querySelector('.window[data-app=' + app + ']');
  
  if(appWindow.classList.contains('is-closed')){
    appWindow.classList.remove('is-closed');
    
    setWindowLocation(appWindow);
  }
  
  if(!appWindow.classList.contains('is-focused')){
    setFocus(appWindow, this);
  }
  
}

function toggleWindowResize(e){
  
}



//Event Listeners
windowBars.forEach(windowBar => {
  windowBar.addEventListener('mousedown', windowPosDown);
  windowBar.addEventListener('mouseup', windowPosUp);
});
document.addEventListener('mousemove', moveWindow);
windowCloses.forEach(windowClose =>windowClose.addEventListener('click', closeWindow));
menuIcons.forEach(menuIcon => menuIcon.addEventListener('click', focusWindow));
windowExpands.forEach(windowExpand =>windowExpand.addEventListener('click', toggleWindowExpand));
windows.forEach(win => {
  win.addEventListener('mousedown', toggleWindowFocus);
  win.addEventListener('mouseover', toggleWindowResize);
});