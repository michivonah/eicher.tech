  function loadPartialContact(){
    $("[id$='-link']").removeClass("active");
    $("contact-link").addClass("active");
    $.ajax({
    url: 'https://eicher.tech/contact',
    success: function (data) {
        $("#content-container").html(data);
    }
    });
  }
  function loadPartialProject(project){
    $("[id$='-link']").removeClass("active");
    $("#"+ project +"-project-link").addClass("active");
    $.ajax({
    url: 'https://eicher.tech/projects/'+project,
    success: function (data) {
        $("#content-container").html(data);
    }
    });
  }