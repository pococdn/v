var video = []
        video[1] = '<iframe src="https://animegloo.github.io/website/gdrive.html#MXJPeFZndEIzUi1SNHJMcWNSOGJPdUozcTNZLV9kREZQ" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="https://animegloo.github.io/website/cat.html#Y2hwemlv" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://animegloo.github.io/website/box.html#bnI3YmFtaG54YWdpcXN2L1JQR0ZfNSBbYW5pbWVnbG9vLmNvbV0=" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://www.fembed.com/v/wrk-zbn4y-wj41d" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="https://streamtape.com/e/eoQb9g6KROuYz8P" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="https://www.yourupload.com/embed/003AV0w0IB38" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        $(document).ready(function(){
          $(".capi-list-tab li:first").addClass("active");
                $('#video_box').html(video[1]);
    
                $(".capi-list-tab li").click(function () {
                    $(".capi-list-tab li").removeClass("active");
                    $(this).addClass("active");
    
                    $('#video_box').html(video[$(this).attr('data-id')]);
                    return false;
        });
      });
