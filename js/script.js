function initMap() {
  const iitLocation = {lat:41.831319, lng: -87.627133};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: iitLocation,
    position: google.maps.ControlPosition.BOTTOM_CENTER
  });
}
window.initMap = initMap;
