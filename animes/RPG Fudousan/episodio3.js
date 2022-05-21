var video = []
        video[1] = '<iframe src="https://animegloo.github.io/website/gdrive.html#MVZiUF9iVUZZcnhyTUltSjRGWEtNUVNEcHNkYmpTaUhr" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="https://animegloo.github.io/website/cat.html#Mmw2ajky" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://animegloo.github.io/website/box.html#NzQ0eHRneDFyMjAwMG5iL1JQR0ZfMyBbYW5pbWVnbG9vLmNvbV0=" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://www.fembed.com/v/g5g6pu-k5mry7zn" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="https://streamtape.com/e/W626b17oDvTbdMb" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="https://www.yourupload.com/embed/x2777vk4cOWQ" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
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
