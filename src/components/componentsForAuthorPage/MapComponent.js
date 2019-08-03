import React from "react";
import idGenerator from 'react-id-generator';
import './MapComponent.css';

let MapOfPlaces, TileLayer, Marker, Popup
export default class MapComponent extends React.Component {

  componentDidMount() {
    MapOfPlaces = require('react-leaflet').Map;
    TileLayer = require('react-leaflet').TileLayer;
    Marker = require('react-leaflet').Marker;
    Popup = require('react-leaflet').Popup;
    this.forceUpdate();
  }

  render() {
    if (!MapOfPlaces || !TileLayer || !Marker || !Popup) {
      return null;
    }
    const { places } = this.props;
    const markers = places.map(place => (
      <Marker key={idGenerator()} position={[place.width, place.length]}>
        <Popup>{place.name}</Popup>
      </Marker>
  ));
    console.log(places[0].width)
    return (
      <MapOfPlaces
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
      </MapOfPlaces>
    )
  }
}
