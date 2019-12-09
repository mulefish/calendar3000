import React from 'react';
class Cell extends React.Component {
  render() { 
    return (    
        <td className='day'>{this.props.data} </td>
    );
  }
} 
export default Cell;