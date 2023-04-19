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
  };
window.initMap = initMap;
