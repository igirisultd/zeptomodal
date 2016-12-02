;(function($) {
  $.extend($.fn, {
    modal: function(content) {
      $(document.body).append($('<span id="zeptoModal"></span>'))
    }
  });
})(Zepto || jQuery);