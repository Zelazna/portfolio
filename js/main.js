//Toggle menu classes

$(document).ready(function () {
    $('.menu-icon').click(function (e) {
            e.preventDefault();
            $this = $(this);
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
    )
});


//realisations animation

//var grid_item = $(".grid-item");
//
//grid_item.mouseenter(function () {
//    $(this).velocity(
//        {
//            scale: 1.5
//        },
//        {
//            duration: 500
//        }).css({'z-index': +90});
//});
//
//grid_item.mouseleave(function () {
//    $(this).velocity(
//        {
//            scale: 1
//        },
//        {
//            duration: 500
//        })
//});

//masonry

//$('.grid').masonry({
//    itemSelector: '.grid-item',
//    columnWidth: '.grid-sizer',
//    percentPosition: true
//});