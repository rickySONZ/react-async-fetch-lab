// create your App component here

import React, { Component } from 'react';

export default class App extends Component {


    render(){
        return(
            console.log('hi')
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
    }
}