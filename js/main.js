//Toggle menu classes

$(function () {
    $('.menu-icon').click(function (e) {
            e.preventDefault();
            var $this = $(this);
            $.modale = $('.modale');
            //ouverture du menu
            if ($this.hasClass('is-opened')) {
                $this.addClass('is-closed').removeClass('is-opened');
                $.modale.velocity("fadeOut", {delay: 250, duration: 500});
                $('html, body').css({
                    'overflow': 'auto',
                    'height': 'auto'
                });
                //fermeture du menu
            } else {
                $this.removeClass('is-closed').addClass('is-opened');
                $.modale.velocity("fadeIn", {duration: 500});
                $('html, body').css({
                    'overflow': 'hidden',
                    'height': '100%'
                });
            }
            //ferme le menu au click sur une ancre
            $('.ancres').click(function () {
                $('.modale').css({
                    'display': 'none'
                });
                $('html, body').css({
                    'overflow': 'auto',
                    'height': 'auto'
                });
                $('.menu-icon').removeClass('is-opened').addClass('is-closed');
            })
        }
    );


    $(".button-fill").hover(function () {
        $(this).children(".button-inside").addClass('full');
    }, function () {
        $(this).children(".button-inside").removeClass('full');
    });

});
