import React from 'react';


export default class Box extends React.Component{

    constructor(pros) {
        super(pros);
        this.state = {
            color: "white",
            child_cnt: 0
            }
        }
    

    changeColor() {
        if (this.state.color === "white") {
            this.setState({
                color: "black",
            })
            this.state.child_cnt = this.state.child_cnt + 1;
            this.props.increase();
        }else {
            this.setState({
                color: "white",
            })
            this.state.child_cnt = this.state.child_cnt - 1;
            this.props.decrease();
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
