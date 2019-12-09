import React from 'react';

import Cell from './Cell';

class Row extends React.Component {
  render() { 
    let cells = []
    this.props.data.forEach((day, i )=>{
        const key = 'c' + i
        cells.push(<Cell key={key} data={day}/>)
      })
    return (
        <tr>{cells}</tr>
    );
  }
} 
export default Row;