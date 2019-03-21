import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapWrapper extends Component {
  componentDidMount() {
    this.calculateDistance();
  }

  componentDidUpdate(prevProps) {
    const {
      sourceLocation: prevSourceLocation,
      destinationLocation: prevDestinationLocation
    } = prevProps;
    const { sourceLocation, destinationLocation } = this.props;

    if (
      prevSourceLocation.lat !== sourceLocation.lat ||
      prevSourceLocation.lng !== sourceLocation.lng
    ) {
      this.calculateDistance();
    } else if (
      prevDestinationLocation.lat !== destinationLocation.lat ||
      prevDestinationLocation.lng !== destinationLocation.lng
    ) {
      this.calculateDistance();
    }
  }

  calculateDistance() {
    const {
      google,
      sourceLocation,
      destinationLocation,
      onDistance
    } = this.props;

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [sourceLocation],
        destinations: [destinationLocation],
        travelMode: "DRIVING",
        drivingOptions: {
          departureTime: new Date(),
          trafficModel: "optimistic"
        }
      },
      (response, status) => {
        if (
          status === "OK" &&
          response.rows &&
          response.rows.length > 0 &&
          response.rows[0].elements &&
          response.rows[0].elements.length > 0 &&
          response.rows[0].elements[0].distance &&
          response.rows[0].elements[0].duration
        ) {
          const result = {
            distance: response.rows[0].elements[0].distance.text,
            duration: response.rows[0].elements[0].duration.text
          };
          onDistance(result);
        } else {
          onDistance(null);
        }
      }
    );
  }

  render() {
    const { google, sourceLocation, destinationLocation } = this.props;
    const style = {
      position: "relative",
      width: "800px",
      height: "400px"
    };

    return (
      <Map
        style={style}
        google={google}
        zoom={14}
        initialCenter={sourceLocation}
      >
        <Marker title={"Origen"} name={"Origen"} position={sourceLocation} />
        <Marker
          title={"Destino"}
          name={"Destino"}
          position={destinationLocation}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCgWMCE2RtiNMu3smD1tbbj1hP5VVsFAdQ"
})(MapWrapper);
