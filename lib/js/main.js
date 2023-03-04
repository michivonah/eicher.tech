var mailAddr = document.getElementById("email");
mailAddr.addEventListener("mouseover", function (){
    document.getElementById("email").innerHTML = 'nico@eicher.tech';
});
mailAddr.addEventListener("mouseout", function (){
    document.getElementById("email").innerHTML = '<i class="fa-solid fa-envelope"></i>';
});

const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var projects = ["guacamole", "nutanix", "presence-detector", "learnjournal"];
var projectNames = ["Apache Guacamole", "Nutanix Lab", "Presence Detector", "LearnJournal WebApp"]

function loadPartialProject(project){
    window.scrollTo(0, 0);
    var ip = document.getElementById('ip-addr').innerHTML;
    document.title = projectNames[projects.indexOf(project)] + '- Nico Eicher';
    var url = '/projects/' + project;
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('body').innerHTML = data;
    });
    setTimeout(() => {
        document.getElementById('ip-addr').innerHTML = ip;
    }, 2500);
    
}

var socials = ["github","instagram","twitter","linkedin"];
var socialUlrs = ["https://github.com/NicoNewsHD","https://www.instagram.com/niconews_/?theme=dark","https://twitter.com/NicoNews_","https://www.linkedin.com/in/nico-eicher-69420924b/"];
function loadSocial(social){
    var url = socialUlrs[socials.indexOf(social)];
    window.open(url);
}