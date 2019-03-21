import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.scss";
import { logIn, setNotAuthenticated } from "./actions";
import LogInForm from "../../components/LogInForm";
import { getLocalItem, saveLocalItem } from "../../utils/storage";

export interface Credentials {
  email: string,
  password: string
}

export interface Session {
  authenticated: boolean,
  token: string
}

interface LogInProps {
  authenticated: boolean;
  history: any;
  onLogIn(credentials: Credentials): void;
  onSetNotAuthenticated(): void;
}

class LogIn extends Component<LogInProps, {}> {
  constructor(props: any) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const { history, onSetNotAuthenticated } = this.props;
    const session: Session = getLocalItem("session");
    
    if (session) {
      history.push("/");
    } else {
      onSetNotAuthenticated();
    }
  }

  componentDidUpdate(prevProps: any) {
    const { authenticated: prevAuthenticated } = prevProps;
    const { authenticated, history } = this.props;

    if (prevAuthenticated !== authenticated && authenticated) {
      history.push("/");
    }
  }

  submit(values: any): void {
    const { onLogIn } = this.props;
    const credentials: Credentials = {
      email: values.email,
      password: values.password
    };
    const session: Session = {
      authenticated: true,
      token: "TestToken"
    };

    saveLocalItem("session", session);
    onLogIn(credentials);
  }

  render() {
    return (
      <div className="log-in">
        <div className="log-in__section">
          <h2 className="log-in__section__title">Iniciar sesión</h2>
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
  onSetNotAuthenticated: () => dispatch(setNotAuthenticated()),
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
