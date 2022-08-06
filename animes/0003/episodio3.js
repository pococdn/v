var video = []
        video[1] = '<iframe src="https://animegloo.github.io/website/player?vid=IQTZsowwKrl_Jipez5ORjqV5G8EY1F0-mvRG7CGwGuhZlDQ1pOconIfdMt_tGgZd" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="//goodrive.stream/embed/?dVFFZlIwM0trTjNCdUZkc2VTOEgwQzhUNFU3bnRObTNhZTNwcUR4UnFXRllVZ1g0ZFllS200Q0dNMWNlOTVMd3VBZ1NKcnJoZ0grVXNhSXdQQU9wdEVHa1NiRWd6RmpYZmg0NVhleGk5S1MxUC9GcHNNTlg5RDkrZWlManZia2NjYWdQRFI0SUpEYWFNNzBQUGlVQ1YwSVVUUTB6TUNzaWhZQ0Q4YmlMZ2FrPTo6xzaPMGT82JslqtH%2BTHzLmA%3D%3D" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://animegloo.github.io/website/player?vid=whtX_bPUaJyBFfnkf-54wVyM0d3tOIDoUU-n5sgHGIsc4AZ6Ny_BdBOplAe9jTBn-z_HA8Nin0PNmKnBOfLcketE5doqJ35o0ZFX5sDz_CcQSymYCVIF73kvfRBOVZE-" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://animegloo.github.io/website/player/solid.html?vid=5GcJzvOG7RWEHgaMZqDC0p-1iXq9NP4VE5c7Med54phRoe-VQNVTY9sG01wcxt61" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="//goodrive.stream/embed/?OGpnZUZpM2JYMjJWZ3RiWGczNW52VUhBeEF1dU5abUdmOWFKZFhUckdlUWQ2bU9MSUUwWTNJbU5RcHF3QmdyTEc5cDB6aTB6Nko5V2d6cGQzZElqOVJIQmJ4M04rMHJNZnY2QkpOUjBiUnBwN1hWcFNTRjArVHRhbkVUZitZbldFOEoycWplQVpYelFZUjJLWkZ4MzdnPT06Oh8DzxATj6hzI%2FeD5KR7aME%3D" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="//goodrive.stream/embed/?K0RicFlaNmY0K3MzeEM3cDhtMUhacmxhMHZYVHU2c295TkJXWk9mdk9mcWUwNXRkY3dIWDdwbEJTQVY0TnJLZHFaMDBPUmx5NFRFT2JDYlJSVm1wb1dTY2FTTEtCeW5BZXE3T3ZXbUFRVjA9OjpRSItxQznb5Eqijg8x70Zm" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
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
