// var skilltext = "Hello there! My name is Cole Snyder and I am a front end developer hailing from the midwest with an appetite for good design and elegant code. Please take a look around and enjoy my creations/experiences.";
// var defaultText = "Hover over any of these skills icons to find out more about my work!"
// var htmlText = "I have had the opportunity to obtain over 4 years of HTML 5 experience through personal projects, school work, work experience and freelance projects. HTML is the backbone of web projects so I like to stress clean and digestible code that is organized and structured.";
// var cssText = "I've been working with CSS for over 4 years to create stunning project designs. I have experience with pre-processors such as <i><b>less</b></i> and have a large ambition to learn more so that my projects can reflect their true design potential. In relation to CSS, I have experience with framesworks like <i><b>Bootstrap</b></i> to help design interface components. ";
// var jsText = "I have over 4 years of experience in JavaScript es6. This includes <i><b>JQuery, Ajax, Node.js, React.js</b></i> and <i><b>React Native </b></i>. I am passionate about my JavaScript skills and am excited to see how they will guide me in the work force!";
// var nodeText = "I have experience in Node setting up servers (using <i><b>express.js</b></i>), handling asynchronous data transfer (using <i><b>socket.io</b></i>) and other components commonly used in Node. ";
// var firebaseText = "I have experience using Firebase as a database tool and as an authentication tool. It has been very usful for small scale projects that I have worked on.";
// var reactText = "I have experience using React Native to create applications that can run on both <i><b>Android</b></i> and <i><b>IOS</b></i> platforms.";
// var drawingText = "The first creative outlet I've had experience with was drawing in high school. I had a very talented instructor who thought I had a knack for drawing and so he pointed me in the direction of <i><b>Photorealism</b></i>. I started to make large portraits of famous people and really enjoyed it. Soon I wanted to add a little uniqueness to it so I would record myself drawing the portraits with a tablet and after about 9 hours of drawing it would be finished. I would take the finished video and speed it up 64x and add my favorite music to it. The result is the drawings on my YouTube page. I had a great time making them and I hope you enjoy them too! - <a href=\"https://www.youtube.com/channel/UCFnmswuuNwJNZxlirLT5w9w\" target=\"_blank\">ColeSnyderArt</a>";
// var conferenceText = "I attended NationJS 2017, Washington DC —The Mid-Atlantic's JavaScript and full web stack conference series. Focused talks on React and other JavaScript based technologies. (http://nationjs.com/)";
// var liveWorkText = "";

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
        document.getElementById("roundAvitar").src = "../PHOTOS/AvitarDarkMode.png"
        document.getElementById("pen").style.color = "#DDDDDD";
        document.getElementById("comp").style.color = "#DDDDDD";
        darkmode = true;
    } else {
        document.body.style.color = "#2d2d2d";
        document.getElementById("para1").style.backgroundColor = "#DDDDDD";
        document.getElementById("para2").style.backgroundColor = "white";
        document.getElementById("para3").style.backgroundColor = "#DDDDDD";
        document.getElementById("para4").style.backgroundColor = "white";
        document.getElementById("FrontEndDeveloper").style.color = "#2d2d2d";
        document.getElementById("roundAvitar").src = "../PHOTOS/Avitar.png";
        document.getElementById("pen").style.color = "#565656";
        document.getElementById("comp").style.color = "#565656";
        darkmode = false;
    }
}

document.getElementsByClassName("skill").onmouseover = function(){alert("asdf")};