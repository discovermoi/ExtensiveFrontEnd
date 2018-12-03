var map;
  var myLatLng = {lat: -33.857043, lng: 151.215155};
  function initGoogleMap() {
    map = new google.maps.Map(document.getElementById('google-map'), {
      center: myLatLng,
      zoom: 8
    });
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Venue Title'
    });
  }