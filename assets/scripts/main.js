$(function() {
  var $gridcontainer = $('.section__designkit__grid');

  $('*[data-grid-accordion]').on('click', function(e) {
    var toShow = $(this).data('gridAccordion');
    $(this).toggleClass('active');
    $gridcontainer.toggleClass(toShow);
  });

  $('.lg-showcase > img').on('click', function() {
      window.location = $(this).attr('src');
  });

  $('#kitdownloadbutton').on('click', function(e){
    e.preventDefault();
    $('#kitdownloadlist').toggleClass('u-hidden');
    $(this).find('span').toggleClass('Icon-collapse').toggleClass('Icon-expand');
  });

  $('.categorykits-selector a').on('click', function(e) {
    e.preventDefault();

    var catkit = $(this).data('selectorclass');
    var $catdesc = $('.categorykits-desc').not('.'+catkit);
    var $kits = $('.RelatedKits-cell').not('.'+catkit);
    var $allkits = $('.RelatedKits-cell');
    var $siblingsmenu = $(this).parents('ul').find('a');

    $siblingsmenu.removeClass('active');
    $(this).addClass('active');

    $allkits.removeClass('hidden');
    $catdesc.addClass('hidden');
    $('.categorykits-desc.'+catkit).removeClass('hidden');

    if (catkit!='all') {
      $kits.addClass('hidden');
    }

  });

})

$(document).ready(function() {
  $('.fr-accordion__header').on('click', function(e) {
    const accordionHeaderText = $(this).find('[data-accordion-header-text]');
    if (accordionHeaderText.hasClass('accordion-line-clamp')) {
      accordionHeaderText.removeClass('accordion-line-clamp');
    } else {
      accordionHeaderText.addClass('accordion-line-clamp');
    }

    const expandButton = $(this).find('[data-accordion-expanded]');
    if (expandButton.attr('data-accordion-expanded') === "false") {
      expandButton.attr('data-accordion-expanded', true);
      expandButton.find('img').attr('src', '/assets/images/icons/icon-more-blue.png');
    } else {
      expandButton.attr('data-accordion-expanded', false);
      expandButton.find('img').attr('src', '/assets/images/icons/icon-more-blue-h.png');
    }
  })
});
