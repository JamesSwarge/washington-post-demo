$(document).ready(function () {
  // alert('working');

  $(function () {
    $('[data-toggle="popover"]').popover({
      html: true,
      content: function () {
        return $('#popover-content').html();
      }
    });
  });

  $(window).scroll(function(e){
    var scroll = $(window).scrollTop();
    if (scroll > 400) {
        $(".navcontent_a").removeClass('hide-content').addClass('show-content');
        $(".navul").removeClass('show-content').addClass('hide-content');
    } else {
      // $(".navcontent_a").hide();
      // $(".navul").show();
      $(".navcontent_a").removeClass('show-content').addClass('hide-content');
      $(".navul").removeClass('hide-content').addClass('show-content');
    }
  })
});