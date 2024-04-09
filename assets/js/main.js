$(document).ready(function() {
    $('#nav-toggle').change(function() {
        if ($(this).is(':checked')) {
            $('.home-container.container').css('margin-left', '30%');
        } else {
            $('.home-container.container').css('margin-left', '15%');
        }
    });
});
