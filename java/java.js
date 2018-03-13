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

    $('#redbutton').on('click', () => {
        $('#as').slideToggle(400)

    });

	initMap();
});



function updateUsername() {
txt = document.getElementById("username").value;
document.getElementById("result").innerHTML = txt ;
}

function initMap() {
    var uluru = {lat: 57.7, lng: 11.9};
	
    var map = new google.maps.Map(document.getElementById('map1'), {
      zoom: 10,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      title: 'Gym 1'
    });

    marker.setMap(map);
	
	var map2 = new google.maps.Map(document.getElementById('map2'), {
      zoom: 8,
      center: uluru
    });
    var marker2 = new google.maps.Marker({
      position: uluru,
      map: map2,
      title: 'Gym 2'
    });

    marker2.setMap(map2);
	
	var map3 = new google.maps.Map(document.getElementById('map3'), {
      zoom: 6,
      center: uluru
    });
    var marker3 = new google.maps.Marker({
      position: uluru,
      map: map3,
      title: 'Gym 3'
    });

    marker3.setMap(map3);
	
	var map4 = new google.maps.Map(document.getElementById('map4'), {
      zoom: 5,
      center: uluru
    });
    var marker4 = new google.maps.Marker({
      position: uluru,
      map: map4
    });

    marker4.setMap(map4);
  }