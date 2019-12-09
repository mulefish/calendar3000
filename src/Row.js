import React from 'react';

import Cell from './Cell';

class Row extends React.Component {
  render() { 
    let cells = []
    console.log("rttwi " + this.props.width)
    this.props.data.forEach((day, i )=>{
        const key = 'c' + i
        cells.push(<Cell key={key} height={this.props.height} width={this.props.width} data={day}/>)
      })
    return (
        <tr>{cells}</tr>
    );
  }
} 
export default Row;