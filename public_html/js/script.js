$('document').ready(function () {
    $('#tabletmenu').hide();
    // le menu tablet est caché par défaut

    $('.bouton').mouseenter(function () {
        $('#tabletmenu').show();
    });
               $('.bouton').mouseleave(function () {
                    $('.bouton').hide();
                });
});