function initMap() {
  const map = new google.maps.Map(document.getElementById("map");
    var myLocation = new google.maps.LatLng(41.831319, -87.627133);
	var mapOptions = {
		center: myLocation,
		zoom: 20,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
}
	}
  });
 const marker = new google.maps.Marker({
  position: {lat: 41.831319, lng: -87.627133},
  title: "IIT Tower",
  animation: google.maps.Animation.Drop,
  icon: "src="images/saul.jpg"
 });
  const infoWindow = new google.maps.InfoWindow({
	  constent: "<p>IIT Tower<p>"
 });
infoWindow.open(Marker);
}
window.initMap = initMap;
