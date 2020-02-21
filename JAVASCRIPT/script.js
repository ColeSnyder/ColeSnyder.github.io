var darkmode = false;
var additionalSkills = false;

var h2length = document.getElementsByTagName("h2").length;
var lightContentLength = document.getElementsByClassName("lightContent").length;
var titleLength = document.getElementsByClassName("title").length;
var aboutTitleLength = document.getElementsByClassName("aboutTitle").length;
var experienceTextLength = document.getElementsByClassName("experienceText").length;

function DarkMode() {
    if (darkmode == false) {
        document.body.style.color = "#DDDDDD";
        document.body.style.backgroundColor = "#1a1b1c";
        for (var i = 0; i < h2length; i++) {
            document.getElementsByTagName("h2")[i].style.color = "#2d2d2d";
        }
        for (var i = 0; i < lightContentLength; i++) {
            document.getElementsByClassName("lightContent")[i].style.color = "#DDDDDD";
        }
        for (var i = 0; i < titleLength; i++) {
            document.getElementsByClassName("title")[i].style.color = "#FFFFFF";
        }
        for (var i = 0; i < aboutTitleLength; i++) {
            document.getElementsByClassName("aboutTitle")[i].style.color = "#EEEEEE";
        }
        for (var i = 0; i < experienceTextLength; i++) {
            document.getElementsByClassName("experienceText")[i].style.color = "#DDDDDD";
        }
        document.getElementById("para1").style.backgroundColor = "#303030";
        document.getElementById("para2").style.backgroundColor = "#262626";
        document.getElementById("para3").style.backgroundColor = "#303030";
        document.getElementById("para4").style.backgroundColor = "#262626";
        document.getElementById("FrontEndDeveloper").style.color = "#DDDDDD";
        document.getElementById("ColeSnyderTitle").style.color = "#DDDDDD";
        document.getElementById("roundAvitar").src = "PHOTOS/AvitarDarkMode.png"
        // document.getElementById("MoreLessToggle").style.color = "#DDDDDD";
        document.getElementById("darkmodetag").style.color = "#DDDDDD";
        document.getElementById("darkmodetag").innerHTML = "Light Mode";
        document.getElementById("bubsGit").src = "PHOTOS/githubDarkMode.png";
        document.getElementById("setupGit").src = "PHOTOS/githubDarkMode.png";
        document.getElementById("warehouseGit").src = "PHOTOS/githubDarkMode.png";
        document.getElementById("boardgameGit").src = "PHOTOS/githubDarkMode.png";
        document.getElementById("colesnyderGit").src = "PHOTOS/githubDarkMode.png";
        document.getElementById("breathandbodyworkGit").src = "PHOTOS/githubDarkMode.png";
        darkmode = true;
    } else {
        document.body.style.color = "#2d2d2d";
        document.body.style.backgroundColor = "white";
        document.getElementById("para1").style.backgroundColor = "#1a1b1c";
        document.getElementById("para2").style.backgroundColor = "#f2f2f2";
        document.getElementById("para3").style.backgroundColor = "#f2f2f2";
        document.getElementById("para4").style.backgroundColor = "#f2f2f2";
        document.getElementById("ColeSnyderTitle").style.color = "#D9C484";
        document.getElementById("FrontEndDeveloper").style.color = "#D9C484";
        document.getElementById("roundAvitar").src = "PHOTOS/Avitar.png";
        // document.getElementById("MoreLessToggle").style.color = "black";
        document.getElementById("darkmodetag").style.color = "#D9C484";
        document.getElementById("darkmodetag").innerHTML = "Dark Mode";
        document.getElementById("bubsGit").src = "PHOTOS/github.png";
        document.getElementById("setupGit").src = "PHOTOS/github.png";
        document.getElementById("warehouseGit").src = "PHOTOS/github.png";
        document.getElementById("boardgameGit").src = "PHOTOS/github.png";
        document.getElementById("colesnyderGit").src = "PHOTOS/github.png";
        document.getElementById("breathandbodyworkGit").src = "PHOTOS/github.png";
        for (var i = 0; i < lightContentLength; i++) {
            document.getElementsByClassName("lightContent")[i].style.color = "#5A6C73";
        }
        for (var i = 0; i < titleLength; i++) {
            document.getElementsByClassName("title")[i].style.color = "#383D40";
        }
        for (var i = 0; i < aboutTitleLength; i++) {
            document.getElementsByClassName("aboutTitle")[i].style.color = "#5A6C73";
        }
        for (var i = 0; i < experienceTextLength; i++) {
            document.getElementsByClassName("experienceText")[i].style.color = "#5A6C73";
        }
        darkmode = false;
    }
}

function SeeMoreLess() {
    if(additionalSkills == false) {
        document.getElementById("MoreLessContent").classList.remove("extendedListOption");
        document.getElementById("MoreLessContent").classList.add("extendedListActive");
        document.getElementById("MoreLessToggle").innerHTML = "<span>See Less</span>"
        additionalSkills = true;
    } else {
        document.getElementById("MoreLessContent").classList.remove("extendedListActive");
        document.getElementById("MoreLessContent").classList.add("extendedListOption");
        additionalSkills = false;
        document.getElementById("MoreLessToggle").innerHTML = "<span>See More</span>"
    }
}

window.onload = function() {
    var isShirt = false;
    var img = document.getElementById("spaceApps");

    let timer = setTimeout(function time() {

        if (isShirt) {
            document.getElementById("spaceApps").src = "./PHOTOS/spaceapps.png";
            // document.getElementById("spaceApps").style.inlineSize = "100%";
            isShirt = false;
        } else {
            document.getElementById("spaceApps").src = "./PHOTOS/rocketSize.png";
            // document.getElementById("spaceApps").style.inlineSize = "44%";
            isShirt = true;
        }
        
        timerId = setTimeout(time, 3000); // (*)
      }, 3000);
}

// function ChangeSpaceApps() {
//     var img1 = document.getElementById("spaceApps");

//     let timerId = setTimeout(function tick() {
//         alert('tick');
//         timerId = setTimeout(tick, 2000); // (*)
//       }, 2000);

// }