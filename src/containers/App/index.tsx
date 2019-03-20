import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className="app">Test</div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({

});

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);