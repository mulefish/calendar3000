import React from 'react';
class Cell extends React.Component {
  render() { 
    const w = {'width': this.props.width, 'height': this.props.height }
    console.log( "jhjhjhjhhjkc " + JSON.stringify( this.props.height ) )
    return (    
        <td className='day' style={w}>{this.props.data} </td>
    );
  }
} 
export default Cell;