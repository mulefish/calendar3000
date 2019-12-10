import React from 'react';
import Modal from './Modal';

import './Cell.css';

class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      newTitle: "",
      titleColor: "#adadad", //Grey
      comment: "",
      titles: []
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

  resetTitle = () => {
    this.setState({
      newTitle: ""
    })
  }

  resetTitleColor = () => {
    this.setState({
      titleColor: "#adadad" //Grey
    })
  }

  resetComment = () => {
    this.setState({
      comment: ""
    })
  }

  handleAdd = () => {
    //Add new title
    let title = this.state.newTitle
    if(title.trim().length > 0) {
      this.setState({
        titles: [...this.state.titles, {title: title, color: this.state.titleColor, comment: this.state.comment}]
      })
    }
    //reset modal fields
    this.resetTitle()
    this.resetTitleColor()
    this.resetComment()
    //close
    this.hideModal()
  }

  handleNewTitleChange = e => {
    let value = e.target.value
    this.setState({
      newTitle: value
    })
  }

  handleTitleColorChange = e => {
    let value = e.target.value
    this.setState({
      titleColor: value
    })
  }

  handleCommentChange = e => {
    let value = e.target.value
    this.setState({
      comment: value
    })
  }

  render() { 
    const w = {'width': this.props.width, 'height': this.props.height }
    const bgColor = {'backgroundColor': this.state.titleColor}
    let aryTitles = [] 
    this.state.titles.forEach((t, i ) => { 
      const key = "t" + i 
      const bgColorCell = {'backgroundColor': t.color}
      aryTitles.push( <div key={key} style={bgColorCell}><span className="title-text">{t.title}</span></div>)
    })

    return (    
        <td className='day' style={w} onClick={e => { this.showModal()}}>
            {this.props.data}
            {aryTitles.length>0 ?
              <div className="titles-wrapper">
                {aryTitles}
              </div>
            :null}  
            <Modal show={this.state.show}  handleClose={this.hideModal} handleAdd={this.handleAdd}>
            <div className="modal-content">Create a new event:</div>
            <div className="modal-event-input">
              <input type="text" name="newTitle" value={this.state.newTitle} onChange={e => {this.handleNewTitleChange(e)}} style={{'width': 100+'%'}}/>
            </div>
            <div className="modal-event-color">
              <label>Color:</label><br></br>
              <select  value={this.state.titleColor} onChange={this.handleTitleColorChange}>
                <option value='#6393e0'>Blue</option>
                <option value='#88b972'>Green</option>
                <option value='#eba760'>Yellow</option>
                <option value='#aa0000'>Red</option>
                <option value='#adadad'>Grey</option>
              </select>
              <span className="color-box" style={bgColor}></span>
            </div>
            <div>
            <label>
              Comments: <br></br>
              <textarea value={this.state.comment} onChange={this.handleCommentChange} cols={40} rows={10} />
            </label>
            </div>
            </Modal>
        </td>
    );
  }
} 
export default Cell;