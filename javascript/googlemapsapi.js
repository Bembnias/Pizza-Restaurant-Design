function initMap() {
  var options = {
    zoom: 13,
    center: {lat:50.049683,lng:19.944544}
  }
  var map = new google.maps.Map(document.getElementById('map'), options);
  var marker = new google.maps.Marker({
    position: {lat:50.061576,lng:19.934696},
    map:map
  });
}
