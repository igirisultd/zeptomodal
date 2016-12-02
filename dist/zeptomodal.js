;(function($) {
  $.modal = function(config) {

    if(!window.__zeptoModal) {
      $(document.body).append($('<div id="zeptoModal" style="font-family:Arial, sans-serif;position:fixed;z-index:1;width:100%;height:100%;overflow:auto;left:0px;top:0px;background-color:rgba(0,0,0,0.4);"><div role="container" style="position:relative;margin:auto;background-color:#eee;width:60%;border:1px solid #333;margin-top:300px;padding:5px"><header style="background-color:#ccc">'+config.title+'<a href="#" role="button" class="close" style="float:right;text-decoration:none;">x</a></header><main>'+config.content+'</main><footer>'+config.footer+'</footer></div></div>'));

      $('#zeptoModal a.close').on('click', function() {
        $('#zeptoModal').css('display', 'none');
        $(document).trigger('zeptomodal:hidden');
      });

      $(document).trigger('zeptomodal:created');

      window.__zeptoModal = {};
    } else {
      $('#zeptoModal').css('display', 'block');
    }

    $(document).trigger('zeptomodal:shown');
  };
})(Zepto || jQuery);