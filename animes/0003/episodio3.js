var video = []
        video[1] = '<iframe src="https://animegloo.github.io/website/player?vid=IQTZsowwKrl_Jipez5ORjqV5G8EY1F0-mvRG7CGwGuhZlDQ1pOconIfdMt_tGgZd" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="https://www.fembed.com/v/6z2ykt02ykx6p6n" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://animegloo.github.io/website/player?vid=whtX_bPUaJyBFfnkf-54wVyM0d3tOIDoUU-n5sgHGIsc4AZ6Ny_BdBOplAe9jTBn-z_HA8Nin0PNmKnBOfLcketE5doqJ35o0ZFX5sDz_CcQSymYCVIF73kvfRBOVZE-" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://animegloo.github.io/website/player/solid.html?vid=5GcJzvOG7RWEHgaMZqDC0p-1iXq9NP4VE5c7Med54phRoe-VQNVTY9sG01wcxt61" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="https://pocoanime.herokuapp.com/drive.php?stream=3zud-r7qsk6PfkzlF8gmD4hS-kxXf9le5DOODZ_t0PE5DoriQO4D1mGHRH-ZuoX444EQLlCxEZLWUKlaHa8cW2i885yhXyaH3gkRVSp2mbsuhfY0bA-Wftyp52jf3XlP" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="https://streamtape.com/e/DqgyGPOG4GHGY3" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
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
