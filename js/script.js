function initMap() {
	var IITtower = {
	center: {lat: 41.831319, lng: -87.627133},
	zoom: 16,
}
map = new google.maps.Map(document.getElementById("map"),IITtower)

	var marker = new google.maps.Marker({
	position: {lat: 41.831319, lng: -87.627133},
	title: "IIT Tower",
	map:map,
	animation: google.maps.Animation.DROP
 });
	
const infoWindow = new google.maps.InfoWindow({
	content: "<p>The IIT Tower was build in 1964.<p>"
});
infoWindow.open(map,marker);
}
window.initMap = initMap;
