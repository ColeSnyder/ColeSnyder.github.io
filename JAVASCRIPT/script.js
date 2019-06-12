var darkmode = false;

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
        document.getElementById("roundAvitar").src = "PHOTOS/AvitarDarkMode.png"
        document.getElementById("pen").style.color = "#DDDDDD";
        document.getElementById("comp").style.color = "#DDDDDD";
        document.getElementById("darkModeLink").style.color = "#DDDDDD";
        document.getElementById("darkModeLink2").style.color = "#DDDDDD";

        darkmode = true;
    } else {
        document.body.style.color = "#2d2d2d";
        document.getElementById("para1").style.backgroundColor = "#DDDDDD";
        document.getElementById("para2").style.backgroundColor = "white";
        document.getElementById("para3").style.backgroundColor = "#DDDDDD";
        document.getElementById("para4").style.backgroundColor = "white";
        document.getElementById("FrontEndDeveloper").style.color = "#2d2d2d";
        document.getElementById("roundAvitar").src = "PHOTOS/Avitar.png";
        document.getElementById("pen").style.color = "#565656";
        document.getElementById("comp").style.color = "#565656";
        document.getElementById("darkModeLink").style.color = "black";
        document.getElementById("darkModeLink2").style.color = "black";
        darkmode = false;
    }
}