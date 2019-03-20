import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.scss";
import { LogInState } from "./reducer";
import { logIn } from "./actions";
import LogInForm from "../../components/LogInForm";

export interface Credentials {
  email: string,
  password: string
}

interface LogInProps {
  authenticated: boolean;
  onLogIn(credentials: Credentials): void;
}

class LogIn extends Component<LogInProps, {}> {
  constructor(props: any) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(values: any): void {
    const credentials: Credentials = {
      email: values.email,
      password: values.password
    };
    this.props.onLogIn(credentials);
  }

  render() {
    return (
      <div className="log-in">
        <div className="log-in__section">
          <h2>Iniciar sesión</h2>
          <div className="log-in__section__form">
            <LogInForm onSubmit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  authenticated: state.logIn.authenticated
});

const mapDispatchToProps = (dispatch: any) => ({
  onLogIn: (credentials: Credentials) => dispatch(logIn(credentials)),
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
