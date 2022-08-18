var video = []
        video[1] = '<iframe src="https://pocoanime.herokuapp.com/encriptar.php?v=QXJCdDJFNUlxUm1ubzQ3V2NHOHZZM2xIV2htenJlTFJNaENldnNCcjRpSWJxeXg1TGRHRWFQYnVhYXNTOVpGNnFYTDFFbzh0cHdkOUp4czVuTVRBY3c9PQ==" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="https://www.fembed.com/v/6z2ykt07qnrr75l" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://v2.zplayer.live/embed/vbq306qo75y2" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://dood.wf/e/35fgw899u7o2" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="https://sbspeed.com/e/pihfro62ir87.html" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="https://streamtape.com/e/9B6JQop3plsazo3" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[7] = '<iframe src="https://citymovie.github.io/website/download.html?link=https://bit.ly/3Pwb5FR" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
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
