// MapComponent.jsx
import React from 'react';
import MapGL, { Marker, Popup } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
 

  const customers = [
    {
        id: 2,
        name: 'John Doe',
        description: 'customer',
        lat: '41.537830',
        lng: '-81.594080'
    }
  ]

  const technicians = [
    {
        id: 3,
        name: 'Jane Doe',
        description: 'customer',
        lat: '41.440360',
        lng: '-81.701460'
    }
  ]

  const [viewport, setViewport] = React.useState({
    latitude: customers.length > 0 ? customers[0].lat : 37.7749, // Default to San Francisco if no customers
    longitude: customers.length > 0 ? customers[0].lng : -122.4194,
    zoom: 10
  });
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  return (
    <MapGL
      style={{ width: '100%', height: '400px', padding: '20px' }}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      accessToken={'pk.eyJ1IjoibWlrYWlsYWJyb3duMjAyMiIsImEiOiJjbHhsMDFtaHMwNjgxMm5wbjZzNWIyNmY4In0.oxai1dhDVQVK-Q4OU2balw'}
      onViewportChange={setViewport}
      {...viewport}
    >
      {customers.map(customer => (
        <Marker
          key={customer.id}
          latitude={customer.lat}
          longitude={customer.lng}
        >
          <div onClick={() => setSelectedLocation(customer)}>
            <img src="https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png" alt="Customer Marker" />
          </div>
        </Marker>
      ))}
      {technicians.map(technician => (
        <Marker
          key={technician.id}
          latitude={technician.lat}
          longitude={technician.lng}
        >
          <div onClick={() => setSelectedLocation(technician)}>
            <img src="https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png" alt="Technician Marker" />
          </div>
        </Marker>
      ))}

      {selectedLocation && (
        <Popup
          latitude={selectedLocation.lat}
          longitude={selectedLocation.lng}
          onClose={() => setSelectedLocation(null)}
        >
          <div>
            <h2>{selectedLocation?.name}</h2>
            <p>{selectedLocation.description}</p>
          </div>
        </Popup>
      )}
    </MapGL>
  );
};

export default MapComponent;
