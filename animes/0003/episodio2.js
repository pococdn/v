var video = []
        video[1] = '<iframe src="https://animegloo.github.io/website/player?vid=IQTZsowwKrl_Jipez5ORjrnTdgcg9yoWkpsuu-I7IufT1xf8ogkaOrsgIM7JPqnj" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="//goodrive.stream/embed/?YnFPcWVncXE1YXN2dmc2Y1hQVC8vTXpqenJFRlhyU0hkMEtyWDd2NWIxdTEwczJvWkR4WENpNEszOXErdFpoNVMwdXp5TlVPZVFTcjkzSDdRbTNPVGFnQXJHeXBnYmVlNzVFRSsvUkZsREhlMWwwcnFLYWY5V21hUnhGWkhPUEtGSzE1NGxsVjJ0K3ArdGhGZ3FkTkozeU1lc1g4YlE3RnJHcWlLZ2s2SFg0PTo6po3rPyKHy%2FmqCaFuy3afMw%3D%3D" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://animegloo.github.io/website/player?vid=whtX_bPUaJyBFfnkf-54wVyM0d3tOIDoUU-n5sgHGIsc4AZ6Ny_BdBOplAe9jTBn-z_HA8Nin0PNmKnBOfLckQ5tlEasFLSFD6puqwSJeCJApxHZyQ9Svodmc7SWoUsQ" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://animegloo.github.io/website/player/solid.html?vid=5GcJzvOG7RWEHgaMZqDC0hGXD3M37fjQ4EHfGG9UdKS_w7qvj3gPedjAGBtwBbhD" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="//goodrive.stream/embed/?Sy81RmRwMCtuMGNpNWVRVVJBdXlRMDRkanpPS0MyMFJZWUhQejZWQ3JZOWg3d2J1b2xuRUZLTURGWVl6MXhUWXNaQ2pYeS9SRkgrZmNOdndYeE9HaXN4TGQxZkQ4ZGVmVVRJd29hbEs3MTFSWXFFQUlUMWJSWDlyVHpoYjNLd2xaQTZZYVNMcXc2SWlNeDVXSS9JcHpBPT06OmpOG2o2EIVfrKE9JB8He8g%3D" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="//goodrive.stream/embed/?ZzFYQ1hiTnZaalhxM1hNMGZucGpXcnNES3FHSGR2Z2ppOVAyclpMczZFeU5yUkw3SmN5aXdpeFBYTXJueFZERURjY042OURkK2taWHNWZW00SlpObHhjSGc3UHhCNTlHbHI1ZExqT25FTXc9OjqOPmi4lLXC9AZakaDw7%2BDj" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
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
