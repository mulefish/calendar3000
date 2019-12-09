import React from 'react';
class CellHeader extends React.Component {
  render() { 
    return (    
        <td className='dayHeader'>{this.props.data} </td>
    );
  }
} 
export default CellHeader;