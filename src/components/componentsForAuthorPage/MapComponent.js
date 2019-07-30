import React from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import idGenerator from 'react-id-generator';
import './MapComponent.css';

export default class MapComponent extends React.Component {
  render() {
    const { places } = this.props;
    const markers = places.map(place => (
      <Marker key={idGenerator()} position={[place.width, place.length]}>
        <Popup>{place.name}</Popup>
      </Marker>
  ));
    console.log(places[0].width)
    return (
      <Map
        center={[places[0].width, places[0].length]}
        bounds={[[places[0].width, places[0].length]]}
        zoom={6}
        maxZoom={18}
        attributionControl
        zoomControl
        doubleClickZoom
        scrollWheelZoom
        dragging
        animate
        easeLinearity={0.35}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {markers}
      </Map>
    )
  }
}
