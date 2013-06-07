var Marker = L.AwesomeMarkers.icon({
  icon: 'book', 
  color: 'blue',
  labelAnchor: [7, -33]
})

var Alpharetta = L.marker([34.075377,-84.291444], {icon: Marker}).bindLabel('Alpharetta Branch').bindPopup('<b>Alpharetta Branch</b> <br /> Exact address to be determined <br /> <b>Opening Date</b>: October 2014 <br /> <b>Size</b>: 25,000 ft<sup>2</sup> <br /> <b>Budget</b>: $8.4 million'),
    EastRoswell = L.marker([34.003236,-84.293651], {icon: Marker}).bindLabel('East Roswell Branch').bindPopup('<b>East Roswell Branch</b> <br /> 2301 Holcomb Bridge Road, Roswell <br /> <b>Opening Date</b>: July 2014 <br /> <b>Size</b>: 15,000 ft<sup>2</sup> <br /> <b>Budget</b>: $4.9 million'),
    Milton = L.marker([34.090039,-84.336419], {icon: Marker}).bindLabel('Milton Branch').bindPopup('<b>Milton Branch</b> <br /> 855 Mayfield Road, Milton <br /> <b>Opening Date</b>: October 2014 <br /> <b>Size</b>: 25,000 ft<sup>2</sup> <br /> <b>Budget</b>: $7.7 million'),
    NorthwestAtl = L.marker([33.804916,-84.469564], {icon: Marker}).bindLabel('Northwest Atlanta Branch').bindPopup('<b>Northwest Atlanta Branch</b> <br /> 2489 Perry Boulevard, Atlanta <br /> <b>Opening Date</b>: To be determined <br /> <b>Size</b>: 25,000 ft<sup>2</sup> <br /> <b>Budget</b>: $8 million'),
    Palmetto = L.marker([33.528239,-84.662801], {icon: Marker}).bindLabel('Palmetto Branch').bindPopup('<b>Palmetto Branch</b> <br /> 9111 Palmetto-Cascade Highway, Palmetto <br /> <b>Opening Date</b>: July 2014 <br /> <b>Size</b>: 10,000 ft<sup>2</sup> <br /> <b>Budget</b>: $3.7 million'),
    SoutheastAtl = L.marker([33.714791,-84.394226], {icon: Marker}).bindLabel('Southeast Atlanta Branch').bindPopup('<b>Southeast Atlanta Branch</b> <br /> 1463 Pryor Road, Atlanta <br /> <b>Opening Date</b>: To be determined <br /> <b>Size</b>: 15,000 ft<sup>2</sup> <br /> <b>Budget</b>: $5.1 million'),
    StewLake = L.marker([33.718646,-84.407444], {icon: Marker}).bindLabel('Stewart-Lakewood Branch').bindPopup('<b>Stewart-Lakewood Branch</b> <br /> 1332 Metropolitan Parkway SW, Atlanta <br /> <b>Opening Date</b>: To be determined <br /> <b>Size</b>: 25,000 ft<sup>2</sup> <br /> <b>Budget</b>: $8.1 million'),
    WolfCreek = L.marker([33.667283,-84.579728], {icon: Marker}).bindLabel('Wolf Creek Branch').bindPopup('<b>Wolf Creek Branch</b> <br /> 3100 Enon Road SW, Atlanta <br /> <b>Opening Date</b>: July 2014 <br /> <b>Size</b>: 25,000 ft<sup>2</sup> <br /> <b>Budget</b>: $7.9 million');

var nextYear = L.layerGroup([Alpharetta, EastRoswell, Milton, Palmetto, WolfCreek]);

var tbd = L.layerGroup([NorthwestAtl, SoutheastAtl, StewLake]);

//var all = L.layerGroup([Alpharetta, EastRoswell, Milton, Palmetto, WolfCreek, NorthwestAtl, SoutheastAtl, StewLake]);
    
var cmAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    cmUrl = 'http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/98490/256/{z}/{x}/{y}.png';

var regular   = L.tileLayer(cmUrl, {styleId: 997, attribution: cmAttr});

		var map = L.map('map', {
			center: new L.LatLng(33.83,-84.400749),
			zoom: 10,
			layers: [regular, nextYear, tbd],
		});


L.tileLayer('http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/98490/256/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                        maxZoom: 18
                        }).addTo(map);

var baseLayers = {};

var overlayMaps = {
    
    "Libraries opening next year": nextYear,
    "Libraries with undetermined opening dates": tbd
    //"All scheduled new libraries": all
};

L.control.layers(baseLayers, overlayMaps).addTo(map);
    
//var marker = L.marker([33.751748,-84.391479]).bindLabel('Look revealing label!').addTo(map);
    
//var popup = L.popup()
    //.setLatLng([33.751748,-84.491479])
    //.setContent("I am a standalone popup.")
    //.openOn(map);