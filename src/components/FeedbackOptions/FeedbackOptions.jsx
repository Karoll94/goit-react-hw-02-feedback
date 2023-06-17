import React, { Component } from "react";
import style from './FeedbackOptions.module.css';


export class FeedbackOptions extends Component{
    render(){
        const {options, onLeaveFeedback} =  this.props;
        return(
            <div className= {style.options} >
                <button className= {style.button} onClick={options}>{onLeaveFeedback}</button>
            </div>
        )
    }
}

export default FeedbackOptions;