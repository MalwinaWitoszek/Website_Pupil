function initMap() {
    var location = {lat: 50.048119, lng: 18.689278};
    var mapProperties = {
        zoom: 15.5,
        center: location };
    var map = new google.maps.Map(document.getElementById('map'), mapProperties);
    var marker = new google.maps.Marker({
      position: location,
      map: map      });

}