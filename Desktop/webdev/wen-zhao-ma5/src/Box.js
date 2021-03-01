import React from 'react';


export default class Box extends React.Component{

    constructor(pros) {
        super(pros);
        this.state = {
            color: "white",
            }
        }
    

    changeColor() {
        if (this.state.color === "white") {
            this.setState({
                color: "black",
            })
        }else {
            this.setState({
                color: "white",
            })
        }
    }


    render(){
        return(
            <div id="square" 
                style={{backgroundColor: this.state.color}}
                onClick={() => this.changeColor()}>
            </div>
        )


    }
}
