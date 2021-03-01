import React from 'react';
import Box from './Box';


export default class Container extends React.Component{

    constructor(pros) {
        super(pros);
        this.state = {
            cnt: 0,
            }
        }
    
    increase = () => {
        this.setState(prevState => {
            return {cnt: prevState.cnt + 1}
        });
    }

    decrease = () => {
        this.setState(prevState => {
            return {cnt: prevState.cnt - 1}
        });
    }

    render(){
        return(
            <div>
                <h1>Mini Assignment 5 - Wen Zhao</h1>
                <h2>Count: {this.state.cnt} </h2>
                <div id="container">
                    <Box increase={this.increase} decrease={this.decrease} grid_area="area1"></Box>
                    <Box increase={this.increase} decrease={this.decrease} grid_area="area2"></Box>
                    <Box increase={this.increase} decrease={this.decrease} grid_area="area3"></Box>
                    <Box increase={this.increase} decrease={this.decrease} grid_area="area4"></Box>
                </div>


            </div>

            

        )        
    }






}
