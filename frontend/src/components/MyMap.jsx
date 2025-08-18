
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet's default marker issue in React
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

function MyMap() {
  // Example dynamic locations (could come from props, API, or DB)
  const locations = [
    { id: 2, name: "Nairobi", coords: [-1.2864, 36.8172] },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[0.3476, 32.5825]} // initial center
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        {/* OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        {/* Loop through locations and add markers */}
        {locations.map((loc) => (
          <Marker key={loc.id} position={loc.coords}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MyMap;

