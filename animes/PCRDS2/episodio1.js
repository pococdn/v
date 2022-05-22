var video = []
        video[1] = '<iframe src="https://animegloo.github.io/website/gdrive.html#MXZOUk5tVWtnQ3RNVllydHM1NzNRTGNWaUxGTk4za2Ny" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="https://animegloo.github.io/website/cat.html#N2Y0ZHZ3" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://v2.zplayer.live/embed/paiox0qt21lo" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://www.fembed.com/v/emy31i-6m-pk886" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="https://streamtape.com/e/dP7v2Y8djMtkx6O" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="https://www.yourupload.com/embed/527IAXLgjAUh" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
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
