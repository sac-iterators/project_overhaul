import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

L.Marker.prototype.options.icon = L.icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const position = [38.679290, -121.261060]
function Map(){
    return(
        <div className="map">
          <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                <a href="https://www.google.com/maps/dir//Asian+n+Cajun+2,+8121+Greenback+Ln,+Fair+Oaks,+CA+95628/">Click here for directions</a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
       
    );

}
export default Map;