// JAVA != JAVASCRIPT, a.k.a. byt namn på filen & mappen :P

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
//    span.appendChild(txt); // ngt fel med den här koden, skapade ett error så avkommenterade den

	initMap();
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
	
	var map2 = new google.maps.Map(document.getElementById('map2'), {
      zoom: 4,
      center: uluru
    });
    var marker2 = new google.maps.Marker({
      position: uluru,
      map: map2
    });
	
	var map3 = new google.maps.Map(document.getElementById('map3'), {
      zoom: 4,
      center: uluru
    });
    var marker3 = new google.maps.Marker({
      position: uluru,
      map: map3
    });
	
	var map4 = new google.maps.Map(document.getElementById('map4'), {
      zoom: 4,
      center: uluru
    });
    var marker4 = new google.maps.Marker({
      position: uluru,
      map: map4
    });
  }