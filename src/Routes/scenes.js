import React, { Component } from 'react'
import {Actions, Scene } from "react-native-router-flux";
import HomeContainer from './Home/Containers/HomeContainer';

const scenes = Actions.create (
    <Scene key="root">
        <Scene key = "home" component = {HomeContainer} title ="home" initial />
    </Scene>
)