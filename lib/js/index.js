/*Was in HTML, had to remove becuase CSP*/
document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ipv4.icanhazip.com")
    .then((response) => response.text())
    .then((text) => {
    document.getElementById('ip-addr').innerHTML = text;
    });
});
document.querySelectorAll(".social").forEach(e => e.addEventListener("click", function(){
    loadSocial(e.dataset.name);
}));
document.querySelectorAll(".card").forEach(e => e.addEventListener("click", function(){
    loadPartialProject(e.dataset.name);
}));