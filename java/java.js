
$(document).ready(() => {
    
    $('#menudrop').hide()

    $('#searchicon').on('click', () => {
        $('#rubrik, #menu').hide();
        $('#searchbar').css("display", "block");
    });
    $('#menu').on('click', () => {
        $('#menudrop').css('left', '0');
        $('#menudrop').slideToggle(400);
    });


});

