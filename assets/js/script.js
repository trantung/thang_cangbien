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
});