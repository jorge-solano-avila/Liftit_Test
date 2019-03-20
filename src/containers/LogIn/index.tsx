import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.scss';

class LogIn extends Component {
  render() {
    return (
      <div className="log-in">Test2</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);