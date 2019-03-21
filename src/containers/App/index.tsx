import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Geocode from "react-geocode";

import "./styles.scss";
import {
  serviceCreatedSuccessfully,
  setSourceLocation,
  setDestinationLocation,
  setDistance
} from "./actions";
import { Session } from "../LogIn";
import ServiceForm from "../../components/ServiceForm";
import MapWrapper from "../../components/MapWrapper";
import { getLocalItem, removeItem } from "../../utils/storage";

export interface Distance {
  distance: string;
  duration: string;
}

interface AppProps {
  history: any;
  serviceCreated: boolean;
  sourceLocation: any;
  destinationLocation: any;
  distance: Distance;
  onServiceCreated(): void;
  onSetSourceLocation(sourceLocation: any): void;
  onSetDestinationLocation(destinationLocation: any): void;
  onSetDistance(distance: Distance | null): void;
}

class App extends Component<AppProps, {}> {
  constructor(props: any) {
    super(props);

    this.submit = this.submit.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    const session: Session = getLocalItem("session");

    Geocode.setApiKey("AIzaSyCgWMCE2RtiNMu3smD1tbbj1hP5VVsFAdQ");
    if (!session) {
      history.replace("/log-in");
    }
  }

  queryGeocode(isSource: boolean, address: string): void {
    const { onSetSourceLocation, onSetDestinationLocation } = this.props;

    Geocode.fromAddress(address).then((response: any) => {
      const result: any = response.results[0];
      if (isSource) {
        onSetSourceLocation(result.geometry.location);
      } else {
        onSetDestinationLocation(result.geometry.location);
      }
    }, (error: any) => {
      console.error(error);
    });
  }

  submit(values: any): void {
    const { onServiceCreated } = this.props;
    const { sourceAddress, destinationAddress } = values;

    onServiceCreated();
    this.queryGeocode(true, sourceAddress);
    this.queryGeocode(false, destinationAddress);
  }

  handleDistance(distance: Distance | null): void {
    const { onSetDistance } = this.props;

    onSetDistance(distance);
  }

  handleLogOut(): void {
    const { history } = this.props;

    removeItem("session");
  }

  renderMap(): JSX.Element | null {
    const { sourceLocation, destinationLocation } = this.props;

    if (!sourceLocation || !destinationLocation) {
      return null;
    }

    return (
      <div className="app__content__map">
        <MapWrapper sourceLocation={sourceLocation} destinationLocation={destinationLocation} onDistance={this.handleDistance} />
      </div>
    );
  }

  render() {
    const { serviceCreated, distance } = this.props;
    const serviceCreatedJSX: JSX.Element | null = serviceCreated ? (
      <span className="app__content__created">¡Servicio creado exitosamente!</span>
    ) : null;
    const distanceJSX: JSX.Element | null = distance ? (
      <div>
        <p><span className="app__content__subtitle">Distancia: </span>{distance.distance}</p>
        <p><span className="app__content__subtitle">Duración: </span>{distance.duration}</p>
      </div>
    ) : null;
    const mapJSX: JSX.Element | null = this.renderMap();

    return (
      <div className="app">
        <div className="app__content">
          <h2 className="app__content__title">Creación de servicio</h2>
          <button className="app__content__button" onClick={this.handleLogOut}>
            <Link to="/log-in">
              Cerrar sesión
            </Link>
          </button>
          <ServiceForm onSubmit={this.submit} />
          <br />
          {serviceCreatedJSX}
          {distanceJSX}
          {mapJSX}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  serviceCreated: state.app.serviceCreated,
  sourceLocation: state.app.sourceLocation,
  destinationLocation: state.app.destinationLocation,
  distance: state.app.distance
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onServiceCreated: () => dispatch(serviceCreatedSuccessfully()),
    onSetSourceLocation: (sourceLocation: any) =>
      dispatch(setSourceLocation(sourceLocation)),
    onSetDestinationLocation: (destinationLocation: any) =>
      dispatch(setDestinationLocation(destinationLocation)),
    onSetDistance: (distance: Distance | null) => dispatch(setDistance(distance)),
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
