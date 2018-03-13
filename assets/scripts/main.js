$(function() {
  var $gridcontainer = $('.section__designkit__grid');

  $('*[data-grid-accordion]').on('click', function(e) {
    var toShow = $(this).data('gridAccordion');
    $(this).toggleClass('active');
    $gridcontainer.toggleClass(toShow);
  });

  $('.js-square').each(function(_, el) { $(el).height($(el).width()) });

  $('.lg-showcase > img').on('click', function() {
      window.location = $(this).attr('src');
  });

  $('#kitdownloadbutton').on('click', function(e){
    e.preventDefault();
    $('#kitdownloadlist').toggleClass('u-hidden');
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
