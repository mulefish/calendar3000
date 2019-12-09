import React from 'react';

import CellHeader from './CellHeader';

class RowHeader extends React.Component {
  render() { 
    let cells = []
    this.props.data.forEach((day, i )=>{
        const key = 'c' + i
        cells.push(<CellHeader key={key}  width={this.props.width}  data={day}/>)
      })
    return (
        <tr>{cells}</tr>
    );
  }
} 
export default RowHeader;