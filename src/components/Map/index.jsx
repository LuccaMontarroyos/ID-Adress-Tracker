import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import "./Map.css"
export const Maps = ({ location }) => {
    
    const customIcon = new Icon ({
        iconUrl : "src/assets/images/pin.png",
        iconSize : [40, 40]
    })
    
    let state = {
        keyMap: Math.random(),
    };

    return (
        <>
        {location.location && <div className="Map">
            <MapContainer key={state.keyMap} center={[location.location.lat, location.location.lng]} zoom={17}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    className="leaflet-map"
                />
                <Marker position={[location.location.lat, location.location.lng ]} icon={customIcon}>
                    <Popup className="popup">{location.ip}</Popup>
                </Marker>
            </MapContainer>
        </div> 
        }</>
    )
}