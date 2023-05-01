function initMap() {
	var IITtower = {
	center: {lat: 41.831319, lng: -87.627133},
	zoom: 16,
}
map = new google.maps.Map(document.getElementById("map"),IITtower)


	const marker = new google.maps.Marker({
	position: {lat: 41.831319, lng: -87.627133},
	title: "IIT Tower",
	map:map,
 });
 var infoWindow = new google.maps.InfoWindow({
      constent:'<h3>IIT Tower<h3>'
});
	marker.addListener('click',function(){
		infoWindow.open(map, marker);
	});
}
