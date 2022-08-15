var video = []
        video[1] = '<iframe src="https://www.fembed.com/v/10k8lijegr87mjl" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="https://pocoanime.herokuapp.com/drive.php?stream=3zud-r7qsk6PfkzlF8gmD4hS-kxXf9le5DOODZ_t0PHheds2K2fUo9z09ir3IQI8IHVzS9MzjudWiDVcfltrYkuQ2xvqWm67IHGa6K8F1wWETDwfv_EUX4e6jAeJjmMb" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://mega.nz/embed/YFIzSLDY#b4v72PTC1sODpd1NKOHSCoED6C23loyOJ2E5_PWo28c" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://v2.zplayer.live/embed/1r8iew7pm44b" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="https://sbspeed.com/e/ii6cy7b2v58z.html" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="https://streamtape.com/e/7908dBXbKOSAXXk" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
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
