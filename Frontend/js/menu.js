var header = document.getElementById('header');
var menuClick = document.getElementById('menu-click');
// var headerHeight = header.clientHeight;

menuClick.onclick = function(){
    // var isClose = header.clientHeight === headerHeight;
    if(header.style.overflow == "hidden")
    {
        header.style.overflow = "visible";
        header.style.height = "auto";
    }
    else{
        header.style.overflow = "hidden";
        header.style.height = null;
    }
}