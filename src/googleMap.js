import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  Circle
} from "react-google-maps";

function Map() {
  const [selectedReceiver, setSelectedReceiver] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedReceiver(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const [receivers, setReceivers] = useState([]);

  const fecthReceivers = async() => {
    await fetch("http://localhost:5000/receivers", {
            method: "GET"
        }).then(res => res.json())
            .then((data) => {
                console.log(data)
                setReceivers(data.data);
            },
            (error) => console.log(error))
  }

  useEffect(() => {
    fecthReceivers();
  }, []);

  const center = {lat:-1.940278, lng:29.873888}
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={center}
      defaultOptions={{ styles: {width: "100%", height: "100%"} }}
    >
      {receivers.map(receiver => (
        <Marker
          key={receiver._id}
          position={{
            lat: receiver.latitude,
            lng: receiver.longitude
          }}
          onClick={() => {
            setSelectedReceiver(receiver);
          }}
          icon={{
            url: "https://1.bp.blogspot.com/-4NLtyNEaY9s/W3o_WLtkKGI/AAAAAAAAAl0/nQ9pgi_D7ZgdOTmEUw049M4l_BbYj057wCLcBGAs/s1600/w1.png",
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))}
      {receivers.map((receiver) => (
        <Circle
            radius={receiver.coverage * 1000} // unit is m and t must km
            center={{lat: receiver.latitude, lng: receiver.longitude}}
            strokeColor='transparent'
            strokeOpacity={0}
            strokeWeight={2}
            fillColor='#00000'
            fillOpacity={0.2}
        />
      ))}

      {selectedReceiver && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedReceiver(null);
          }}
          position={{
            lat: selectedReceiver.latitude,
            lng: selectedReceiver.longitude
          }}
        >
          <div>
            <h2>{selectedReceiver.latitude}</h2>
            <p>{selectedReceiver.longitude}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAlWnvLoFl72OeO3FpOkFBObwN5Vr6EkZA"}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}