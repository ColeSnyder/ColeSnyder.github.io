var darkmode = false;
var additionalSkills = false;

var h2length = document.getElementsByTagName("h2").length;

function DarkMode() {
    if (darkmode == false) {
        document.body.style.color = "#DDDDDD";
        for (var i = 0; i < h2length; i++) {
            document.getElementsByTagName("h2")[i].style.color = "#2d2d2d";
        }
        document.getElementById("para1").style.backgroundColor = "#303030";
        document.getElementById("para2").style.backgroundColor = "#262626";
        document.getElementById("para3").style.backgroundColor = "#303030";
        document.getElementById("para4").style.backgroundColor = "#262626";
        document.getElementById("FrontEndDeveloper").style.color = "#DDDDDD";
        document.getElementById("ColeSnyderTitle").style.color = "#DDDDDD";
        document.getElementById("roundAvitar").src = "PHOTOS/AvitarDarkMode.png"
        document.getElementById("pen").style.color = "#DDDDDD";
        document.getElementById("comp").style.color = "#DDDDDD";
        document.getElementById("experienceText1").style.color = "#DDDDDD";
        document.getElementById("experienceText2").style.color = "#DDDDDD";
        document.getElementById("experienceText3").style.color = "#DDDDDD";
        document.getElementById("experienceText4").style.color = "#DDDDDD";
        document.getElementById("MoreLessToggle").style.color = "#DDDDDD";
        document.getElementById("darkmodetag").style.color = "#DDDDDD";
        document.getElementById("darkmodetag").innerHTML = "Light Mode";
        darkmode = true;
    } else {
        document.body.style.color = "#2d2d2d";
        document.getElementById("para1").style.backgroundColor = "#DDDDDD";
        document.getElementById("para2").style.backgroundColor = "white";
        document.getElementById("para3").style.backgroundColor = "#DDDDDD";
        document.getElementById("para4").style.backgroundColor = "white";
        document.getElementById("FrontEndDeveloper").style.color = "#2d2d2d";
        document.getElementById("ColeSnyderTitle").style.color = "#2d2d2d";
        document.getElementById("roundAvitar").src = "PHOTOS/Avitar.png";
        document.getElementById("pen").style.color = "#565656";
        document.getElementById("comp").style.color = "#565656";
        document.getElementById("experienceText1").style.color = "black";
        document.getElementById("experienceText2").style.color = "black";
        document.getElementById("experienceText3").style.color = "black";
        document.getElementById("experienceText4").style.color = "black";
        document.getElementById("MoreLessToggle").style.color = "black";
        document.getElementById("darkmodetag").style.color = "black";
        document.getElementById("darkmodetag").innerHTML = "Dark Mode";
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

// function ResumeDarkModeCheck() {
//     if (darkmode == true) {
//         document.getElementById("resumeContent").style.backgroundColor = "#303030";
//     }
// }