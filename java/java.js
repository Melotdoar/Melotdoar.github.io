
$(document).ready(() => {
    

    var latestmain = "#sida1main"

    $('#menudrop, #close, #loginmain, #welcomemain, #aboutmain, #contactmain').hide()

    $('#searchicon').on('click', () => {
        $('#rubrik, #menu, #searchicon').hide();
        $('#searchbar').css("display", "block");
        $('#close').show();
    });

    
    $('#close').on('click', () => {
        $('#rubrik, #menu, #searchicon').show();
        $('#searchbar').css("display", "none");
        $('#close').hide()
    });

    $('#menu').on('click', () => {
        $('#menudrop').css('left', '0');
        $('#menudrop').slideToggle(400);
    });

    $('#loginbutton').on('click', () => {
        $(latestmain).hide();
        $('#menudrop').slideToggle(150);
        $('#loginmain').show();
        latestmain = "#loginmain";
    });

    $('#loginconfirm').on('click', () => {
        $(latestmain).hide();
        $('#welcomemain').show();
        latestmain = "#welcomemain";
    });

    $('#aboutbutton').on('click', () => {
        $(latestmain).hide();
        $('#menudrop').slideToggle(150);
        $('#aboutmain').show();
        latestmain = "#aboutmain";
    });

    $('#contactusbutton').on('click', () => {
        $(latestmain).hide();
        $('#menudrop').slideToggle(150);
        $('#contactmain').show();
        latestmain = "#contactmain";
    });

    span = document.getElementById("result");
    txt = document.getElementById("username").value;
    span.appendChild(txt);

 
});

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map1'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }