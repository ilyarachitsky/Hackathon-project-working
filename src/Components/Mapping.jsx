import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as vaccinationCenters from "./vaccinationCenters.json";
import "./Style.css";
import Search from "react-leaflet-search";

export default function Mapping() {
  const [activeCenter, setActiveCenter] = React.useState(null);

  return (
    <Map center={[46.68, 23.03]} zoom={4}>
      <Search
        position='topleft'
        inputPlaceholder='Search...'
        showMarker={false}
        zoom={12}
        closeResultsOnClick={true}
        openSearchOnLoad={false}
      />

      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {vaccinationCenters.vaccinationCenters.map((center) => (
        <Marker
          key={center.id}
          position={[center.latitude, center.longitude]}
          onClick={() => {
            setActiveCenter(center);
          }}
        />
      ))}

      {activeCenter && (
        <Popup
          position={[activeCenter.latitude, activeCenter.longitude]}
          onClose={() => {
            setActiveCenter(null);
          }}>
          <div>
            <h2 className='card-text'>{activeCenter.center}</h2>
            <p className='card-text'>
              <strong>Address:</strong> {activeCenter.address}
            </p>
            <p className='card-text'>
              <strong>Phone:</strong> {activeCenter.phone}
            </p>
            <img className='images' src={activeCenter.img} alt='aaa' />
          </div>
        </Popup>
      )}
    </Map>
  );
}
