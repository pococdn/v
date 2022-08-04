var video = []
        video[1] = '<iframe src="https://animegloo.github.io/website/player?vid=IQTZsowwKrl_Jipez5ORjsFywcXYE4itDS1faDJlw-aX91EaVAdAsuJr2vLhzROr" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="https://www.fembed.com/v/0dmnxbl3jrw4216" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://animegloo.github.io/website/player?vid=-dSUTlFrh0pTnZaSTFXIGSy7zSe2HBUTNL2AtoJGgcp997KqRMEyPTULVxY_ctC373_-7DP_wPtAp3u9jidYpw==" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://sbthe.com/e/btmuu3ftg6jv.html" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="https://animegloo.github.io/website/gdrive.html#MUh5cDNDV0JuU2NvMDVZVEk3eEVlbTloSkh3aTRRTkZL" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="https://streamtape.com/e/MZ38GVGwZ1TmRbr" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
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
