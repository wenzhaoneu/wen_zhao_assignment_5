import React from 'react';
import Box from './Box.js';
import './index.css';


export default class App extends React.Component{

    render(){
        return (
            <div>
                <h1>Mini Assignment 5 - Wen Zhao</h1>
                {/* <h1>Count: {this.state.cnt}</h1> */}
                <Box />

            </div>
            
        )
    }

}