var video = []
        video[1] = '<iframe src="https://www.fembed.com/v/emy31i-mp3yqkj4" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="https://pocoanime.herokuapp.com/drive.php?stream=3zud-r7qsk6PfkzlF8gmD4hS-kxXf9le5DOODZ_t0PGAO_6j9fZ7c1okwWBD0xG83s6dsd8qLLAHkTKz-TmEVE2sirvP4oNfVyni_4fEkso=" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://mega.nz/embed/AoRjBBST#HY5sjI7EPox_eLfdY-vhPud97vOTWXdjkCmCdtelet0" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://pocoanime.herokuapp.com/encriptar.php?v=V1JPRFNlY0R1MXdOZ0J4cHBDY1JCY3ZmNk00WW4ydzUxRlg3N3gwNk91WllVVVBpT1dNWVR3YzU5cmtpTytPZ2tHMDJkbFd4L3RjSS9JSVFNRVVrVjFwUXgzYXo2d1FaWmpXVnlkRHJPbUxmVzhhT3hPVG1qTTIrS0RpN2FEUGo=" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="https://sbthe.com/e/gemwf38d8g6p.html" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="https://streamtape.com/e/kb2brl330oIOo0A" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
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
