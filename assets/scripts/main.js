$(function() {
    var $gridcontainer = $('.section__designkit__grid');

    $('*[data-grid-accordion]').on('click', function(e) {
        var toShow = $(this).data('gridAccordion');
        $gridcontainer.attr('class','section__designkit__grid');
        $(this).toggleClass('active');
        $gridcontainer.toggleClass(toShow);
    });
})
