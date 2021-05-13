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

  $('#kitdownloadbutton').on('click', function(e) {
    e.preventDefault();
    $('#kitdownloadlist').toggleClass('u-hidden');
    $(this).find('span').toggleClass('Icon-collapse').toggleClass('Icon-expand');
  });

  $('.categorykits-selector a').on('click', function(e) {
    e.preventDefault();

    var catkit = $(this).data('selectorclass');
    var $catdesc = $('.categorykits-desc').not('.' + catkit);
    var $kits = $('.RelatedKits-cell').not('.' + catkit);
    var $allkits = $('.RelatedKits-cell');
    var $siblingsmenu = $(this).parents('ul').find('a');

    $siblingsmenu.removeClass('active');
    $(this).addClass('active');

    $allkits.removeClass('hidden');
    $catdesc.addClass('hidden');
    $('.categorykits-desc.' + catkit).removeClass('hidden');

    if (catkit != 'all') {
      $kits.addClass('hidden');
    }

  });

})

// Helper functions to manage Accordion visual effect (e.g. lines clamp and expand/collapse button)
$(document).ready(function() {
  $('[data-accordion-expanded]').on('click', function(e) {
    const accordionEl = $(this).siblings('.Accordion');
    const accordionHeader = accordionEl.find('.fr-accordion__header');
    accordionHeader.click();
  })

  $('.fr-accordion__header').on('click', function(e) {
    const accordionHeaderText = $(this).find('[data-accordion-header-text]');
    if (accordionHeaderText.hasClass('accordion-line-clamp')) {
      accordionHeaderText.removeClass('accordion-line-clamp');
    } else {
      accordionHeaderText.addClass('accordion-line-clamp');
    }

    const accordionEl = $(this).parents('.Accordion');
    const expandButtonEl = accordionEl.siblings('[data-accordion-expanded]');
    if (expandButtonEl.attr('data-accordion-expanded') === "false") {
      expandButtonEl.attr('data-accordion-expanded', true);
      expandButtonEl.removeClass('accordion-expand-button-close');
      expandButtonEl.addClass('accordion-expand-button-open');
      expandButtonEl.find('img').attr('src', '/assets/images/icons/arrow-up-big.svg');
    } else {
      expandButtonEl.attr('data-accordion-expanded', false);
      expandButtonEl.removeClass('accordion-expand-button-open');
      expandButtonEl.addClass('accordion-expand-button-close');
      expandButtonEl.find('img').attr('src', '/assets/images/icons/arrow-down-big.svg');
    }
  })

  // If there is only one superaccordion in the page, automatically open it
  if ($('[data-accordion-expanded]').length === 1) {
    $('[data-accordion-expanded]').click();
  }

  // Automatically open the 1st accordion
  $('[data-accordion-expanded]').first().click();
});