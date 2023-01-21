  function loadPartialContact(){
    $("[id$='-link']").removeClass("active");
    $("contact-link").addClass("active");
    $.ajax({
    url: '/contact',
    success: function (data) {
        $("#content-container").html(data);
    }
    });
  }
  function loadPartialProject(project){
    $("[id$='-link']").removeClass("active");
    $('.dropdown.open .dropdown-toggle').dropdown('toggle');
    $("#"+ project +"-project-link").addClass("active");
    $.ajax({
    url: '/projects/'+project,
    success: function (data) {
        $("#content-container").html(data);
    }
    });
  }