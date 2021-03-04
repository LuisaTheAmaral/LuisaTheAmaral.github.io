// TYPING EFFECT      
var i = 0;
var txt = 'welcome!';
var speed = 80;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("msg").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function displayUser() {
    var x = document.getElementById("user-main-screen"); 
    x.style.display = "block";
}

function displayEducation() {
    var x = document.getElementById("education-main-screen"); 
    x.style.display = "block";
}

function hideUser() {
    var x = document.getElementById("user-main-screen"); 
    x.style.display = "none";
}

function hideEducation() {
    var x = document.getElementById("education-main-screen"); 
    x.style.display = "none";
}

function hideTerminal() {
    var x = document.getElementById("terminal-main-screen"); 
    x.style.display = "none";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
}

// function display() {
//     var x = document.createElement("input");
//     x.setAttribute("type", "text");
//     document.body.appendChild(x);
//     document.getElementById("terminal__prompt--cursor").appendChild(x);
    
    
//     var y = document.getElementById("cmd").style.backgroundColor = "red"; 
//     document.getElementById("user-main-screen").style.display = "absolute";
// }
