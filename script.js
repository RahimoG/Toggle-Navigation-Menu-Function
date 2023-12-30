const nav = document.getElementById("nav");

const navMenuBar = document.getElementById("navOpenBtn");
navMenuBar.onclick = function()
{
    nav.classList.add("openNav");
    navMenuBarActive = true;
    console.log("test");
}

const navCloseBtn = document.getElementById("navCloseBtn");
navCloseBtn.onclick = function()
{
    nav.classList.remove("openNav");
    navMenuBarActive = false;
}

// suplement :  search input on clicked: 

const searchIcon = document.getElementById("searchIcon");
let isActiveSreach = false

searchIcon.onclick = function()
{
    if(!isActiveSreach)
    {
        nav.classList.add("openSearch");
        isActiveSreach = true;
    }else{
        nav.classList.remove("openSearch");
        isActiveSreach = false;
    }
}

