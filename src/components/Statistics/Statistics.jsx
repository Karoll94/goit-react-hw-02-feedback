import React, { Component } from 'react';
//importación de los prototipos
// import PropTypes from 'prop-types';
//Importación de los estilos
// import style from './Statistics.module.css';

export class Statistics extends Component{
    
    render(){
        const {good, bad, neutral, total, positivePercentage} = this.props;
        return(
            <div>
            <h3>Statistics</h3>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback Percentage: {positivePercentage} %</p>
          </div>
        )
    }
}

export default Statistics;