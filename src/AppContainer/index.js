import React, { Component  } from 'react';
import {Router} from 'react-native-router-flux';
import PropTypes from 'prop-types'
import scenes from '../Routes/scenes'

import { Provider } from "react-redux";

export default class AppContainer extends Component {


    static propTypes ={
    store : PropTypes.object.isRequired,
}
    render() {
      return (
        <Provider store  = {this.props.store} >
            <Router scenes = {scenes} />
        </Provider>
      )
    }
}