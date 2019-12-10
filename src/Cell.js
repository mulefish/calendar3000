import React from 'react';
import Modal from './Modal';


class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  } 

  showModal = () => {
    if(!this.state.show) {
      this.setState({
        show: true
      })
    }
  }

  hideModal = () => {
    this.setState({
      show: false
    })
  }

  render() { 
    const w = {'width': this.props.width, 'height': this.props.height }
    console.log( "jhjhjhjhhjkc " + JSON.stringify( this.props.height ) )
    return (    
        <td className='day' style={w} onClick={e => { this.showModal()}}>
            {this.props.data}  
            <Modal show={this.state.show}  handleClose={this.hideModal}>
              <div>Hello</div>
            </Modal>
        </td>
    );
  }
} 
export default Cell;