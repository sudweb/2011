/* -- BEGIN LICENSE BLOCK ----------------------------------
 * This file is part of GeoCrazy, a plugin for Dotclear.
 * 
 * Copyright (c) 2009 Benjamin Dumas and contributors
 * 
 * Licensed under the GPL version 2.0 license.
 * A copy of this license is available in LICENSE file or at
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * -- END LICENSE BLOCK ------------------------------------ 
 */

/*
 * This code is used to display the map of a geotagged post in the blog.
 */

/*
 * Displays a map.
 * This function is called by each GeoCrazy widget in the page.
 */
function gcMap(htmlId, mapType, zoomLevel, gcLatLong) {
	var type = google.maps.MapTypeId.TERRAIN;
	switch(mapType) {
		case 1:
			type = google.maps.MapTypeId.TERRAIN;
			break;
		case 2:
			type = google.maps.MapTypeId.ROADMAP;
			break;
		case 3:
			type = google.maps.MapTypeId.SATELLITE;
			break;
		case 4:
			type = google.maps.MapTypeId.HYBRID;
			break;
	}
	
	var gcLatLng = gcLatLong.split(' ');
	
	var gPoint = new google.maps.LatLng(gcLatLng[0], gcLatLng[1]);
	var mapOptions = {
	  zoom: zoomLevel,
	  center: gPoint,
	  mapTypeControl: false,
	  mapTypeId: type
	};
	var map = new google.maps.Map(document.getElementById(htmlId), mapOptions);
	
	var marker = new google.maps.Marker({position: gPoint, map: map});
	return false;
};
