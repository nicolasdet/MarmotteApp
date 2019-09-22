import React, { Component,  } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import * as loginActions from 'app/actions/loginActions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        SplashScreen.hide();
    }


    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
