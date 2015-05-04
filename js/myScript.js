$(document).ready(function() {

    var subTitle;

    subTitle = $('#header span:first');
    subTitle.addClass('sub-title');

    $('.biopic').addClass('inner-micro-summary');
    $('.welcome-message').addClass('inner-micro-summary');

    $('.inner-micro-summary').wrapAll('<div class="micro-summary"></div>');
});