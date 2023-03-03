function ChangeUrl(title, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Title: title, Url: url };
        history.pushState(obj, obj.Title, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}

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


/*SECURITY (thx DF)*/
let securityHeaders = {
    "Content-Security-Policy" : "default-src 'self'; font-src *; img-src 'self'; object-src 'none'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; connect-src https://ipv4.icanhazip.com 'self'",
    "Strict-Transport-Security" : "max-age=2592000",
    "X-Xss-Protection" : "1; mode=block",
    "X-Frame-Options" : "DENY",
    "X-Content-Type-Options" : "nosniff",
    "Referrer-Policy" : "strict-origin-when-cross-origin",
    "Feature-Policy": "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none';  microphone 'none'; payment 'none'; usb 'none'"
  }
  
  let sanitiseHeaders = {
    "Server" : "My New Server Header!!!",
  }
  
  let removeHeaders = [
    "Public-Key-Pins",
    "X-Powered-By",
    "X-AspNet-Version",
  ]
  
  addEventListener('fetch', event => {
    event.respondWith(addHeaders(event.request))
  })
  
  async function addHeaders(req) {
    let response = await fetch(req)
    let newHdrs = new Headers(response.headers)
  
    if (newHdrs.has("Content-Type") && !newHdrs.get("Content-Type").includes("text/html")) {
      return new Response(response.body , {
        status: response.status,
        statusText: response.statusText,
        headers: newHdrs
      })
    }
  
    let setHeaders = Object.assign({}, securityHeaders, sanitiseHeaders)
  
    Object.keys(setHeaders).forEach(name => {
      newHdrs.set(name, setHeaders[name]);
    })
  
    removeHeaders.forEach(name => {
      newHdrs.delete(name)
    })
  
    return new Response(response.body , {
      status: response.status,
      statusText: response.statusText,
      headers: newHdrs
    })
  }