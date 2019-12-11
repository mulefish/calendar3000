import React from 'react';

import Cell from './Cell';

class Row extends React.Component {
  render() { 
    let cells = []
    this.props.data.forEach((day, i )=>{
        const key = 'c' + i
        cells.push(<Cell key={key} dayOfTheWeek={i} activeYear={this.props.activeYear} activeMonth={this.props.activeMonth} height={this.props.height} width={this.props.width} data={day}/>)
      })
    return (
        <tr>{cells}</tr>
    );
  }
} 
export default Row;