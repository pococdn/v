var video = []
        video[1] = '<iframe src="https://animegloo.github.io/website/gdrive.html#MXA2Zkc1TFhMYjZkQUxPUTZmUzFVTUJPWnNyWGRxRTZ0" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="https://animegloo.github.io/website/cat.html#cTAwYmM0" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://v2.zplayer.live/embed/3sgvq4s38j8q" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://www.fembed.com/v/q3p-dceq74kq72r" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="https://streamtape.com/e/VadvR6DWlzHKpJJ" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="https://www.yourupload.com/embed/pX027Q2lt1s8" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
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
