import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.scss";
import { Session } from "../LogIn";
import { getLocalItem } from "../../utils/storage";

interface AppProps {
  history: any;
}

class App extends Component<AppProps, {}> {
  componentDidMount() {
    const { history } = this.props;
    const session: Session = getLocalItem("session");

    if (!session) {
      history.replace("/log-in");
    }
  }

  render() {
    return <div className="app">Test</div>;
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({});

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
