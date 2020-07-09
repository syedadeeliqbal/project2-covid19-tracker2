import React from "react";
import GoogleMap from "google-map-react";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "80%" }}>
        <GoogleMap
          apiKey={"AIzaSyD6GR_rO09Fqe6JRF3eMmtl84_uXCrKlE8"} // set if you need stats etc ...
          center={{ lat: 43.731, lng: -79.7624 }}
          zoom={6}
        ></GoogleMap>
      </div>
    );
  }
}

// const Map = (props) => {
//     let defaultProps = {
//         center: {
//           lat: 59.95,
//           lng: 30.33
//         },
//         zoom: 5
//       };

//       return (
//         // Important! Always set the container height explicitly
//         <div style={{ height: '100vh', width: '100%' }}>
//           <GoogleMapReact
//             bootstrapURLKeys={{ key: "AIzaSyD6GR_rO09Fqe6JRF3eMmtl84_uXCrKlE8" }}
//             defaultCenter={ {lat: 43.731, lng: -79.7624 }}
//             defaultZoom={4}
//           >
//           </GoogleMapReact>
//         </div>
//       );
//     }

// ({mapData}) => {
//     if(Array.isArray(mapData)){
//          let listItems = mapData.map(x =>
//          <li key={x.flag}>
//            {x.lat}
//          </li>);

//         return (
//             <GoogleMap
//             defaultZoom={4}
//             defaultCenter={{ lat: 43.731, lng: -79.7624 }}
//           >
//             {<Marker position={{ lat: -34.397, lng: 150.644 }} />}
//           </GoogleMap>
//       );
//     }

export default Map;
