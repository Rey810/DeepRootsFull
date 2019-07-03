// Nav JS

// Index
// 1: Navigation
// 2:


// 1:________________________________________

function openNav() { //opens navigation bar
    console.log(document.getElementById("navigation").style.width);
    document.getElementById("navigation").style.width = "30%";
    document.getElementById("navigation").style.opacity = "1";
    console.log(document.getElementById("navigation").style.width);
}

function closeNav() { //closes nav bar
    document.getElementById("navigation").style.opacity = "0";
    document.getElementById("navigation").style.width = "0%";
}

document.addEventListener("wheel", closeNav);

function openNavMobile() { //opens navigation bar
    console.log(document.getElementById("navigationMobile").style.width);
    document.getElementById("navigationMobile").style.width = "100%";
    document.getElementById("navigationMobile").style.opacity = "1";
    console.log(document.getElementById("navigationMobile").style.width);
}

function closeNavMobile() { //closes nav bar
    document.getElementById("navigationMobile").style.opacity = "0";
    document.getElementById("navigationMobile").style.width = "0%";
}

document.addEventListener("wheel", closeNav);
