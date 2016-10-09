$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });

    $('#calendar-widget div').datepicker({
        format: "dd/mm/yy",
        language: "vi",
        todayHighlight: true
    });

    $('#link').select2();

    $('#link').on('select2:selecting', function () {
        window.open($(this).val(), '_blank');
    })

    $('.partner-wr').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:'<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:'<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

});