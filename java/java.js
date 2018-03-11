
$(document).ready(() => {
    

    var latestmain = "#sida1main"

    $('#menudrop, #close, #loginmain, #welcomemain').hide()

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

    function pr() {
        document.getElementById("result").innerHTML = document.getElementById('username').value;
      }

});

