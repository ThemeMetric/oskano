/**
*
* -----------------------------------------------------------------------------
*
* Template : Oskano | Multipage Html5 Responsive Construction Template 
* Author : ThemeMetric
* Author URI : https://www.thememetric.com/
*
* -----------------------------------------------------------------------------
*
**/

// gmap init
function initialize() {
    var mapCanvas = document.getElementById('g-map');
    var myCenter = new google.maps.LatLng(39.92757,-83.160207);
    var mapOptions = {center: myCenter, zoom: 8, scrollwheel: false, mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);