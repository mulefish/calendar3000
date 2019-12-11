import React from 'react';
import Modal from './Modal';

import './Cell.css';
import getHoliday from './Holidays'



const DEFAULT_COLOR = "#adadad" //Grey

class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      editMode: false,
      dTitle: "",
      dOriginalTitle: "",
      dColor: DEFAULT_COLOR,
      dComment: "",
      titles: []
    }
  } 

  showModal = () => {
    if(!this.state.show && this.props.data) {
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

  handleAdd = () => {
    let title = this.state.dTitle
    if(title.trim().length > 0) {
      this.setState({
        titles: [...this.state.titles, {title: title, color: this.state.dColor, comment: this.state.dComment}]
      })
    }
    //reset modal fields and close
      this.setState({
        dTitle: "",
        dOriginalTitle: "",
        dColor: DEFAULT_COLOR,
        dComment: "",
        editMode: false,
        show: false
      })
  }

  handleUpdate = () => {
    let title = this.state.dTitle
    if(title.trim().length > 0) {
      let originalTitle = this.state.dOriginalTitle
      let updateTitles = [...this.state.titles]
      var foundIndex = updateTitles.findIndex(x => x.title === originalTitle);
      updateTitles[foundIndex] = {title: this.state.dTitle, color: this.state.dColor, comment: this.state.dComment};
      this.setState({
        titles: [...updateTitles]
      })
    }
  //reset modal fields and close
      this.setState({
        dTitle: "",
        dColor: DEFAULT_COLOR,
        dComment: "",
        editMode: false,
        show: false
      })
  }

  handleDelete = () => {
    let originalTitle = this.state.dOriginalTitle
    let updateTitles = this.state.titles.filter(function(t) { return t.title !== originalTitle})
    this.setState({
      titles: [...updateTitles]
    })
  //reset modal fields and close
      this.setState({
        dTitle: "",
        dColor: DEFAULT_COLOR,
        dComment: "",
        editMode: false,
        show: false
      })
  }

  handleNewTitleChange = e => {
    let value = e.target.value
    this.setState({
      dTitle: value
    })
  }

  handleTitleColorChange = e => {
    let value = e.target.value
    this.setState({
      dColor: value
    })
  }

  handleCommentChange = e => {
    let value = e.target.value
    this.setState({
      dComment: value
    })
  }

  handleOpenTitle = t => {
    console.log("t=" + JSON.stringify(t))
    if(t){
      //set the modal fields and open
      this.setState({
        dTitle: t.title,
        dOriginalTitle: t.title,
        dColor: t.color,
        dComment: t.comment,
        editMode: true,
        show: true
      })
    }
  }


  render() { 
    const holiday = getHoliday(this.props.activeYear, this.props.activeMonth, this.props.data)

    let dayCss = 'day'
    if ( this.props.dayOfTheWeek === 0 ) {
      dayCss = 'Sunday'
    } else if ( this.props.dayOfTheWeek === 6 ) {
      dayCss = 'Saturday'
    }
    const w = {'width': this.props.width, 'height': this.props.height }
    const bgColor = {'backgroundColor': this.state.dColor}
    let aryTitles = [] 
    this.state.titles.forEach((t, i ) => { 
      const key = "t" + i 
      const bgColorCell = {'backgroundColor': t.color}
      aryTitles.push( <div key={key} style={bgColorCell} className="title-wrapper" onClick={() => {this.handleOpenTitle(t)}}><span className="title-text">{t.title}</span></div>)
    })

    return (    
        <td className={dayCss} style={w} onClick={e => { this.showModal()}}>
            {this.props.data}
            <div className='holiday'>{holiday}</div>
            {aryTitles.length>0 ?
              <div className="titles-wrapper">
                {aryTitles}
              </div>
            :null}  
            <Modal show={this.state.show} editMode={this.state.editMode} handleClose={this.hideModal} handleAdd={this.handleAdd} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete}>
            <div className="modal-content">Create a new event:</div>
            <div className="modal-event-input">
              <input type="text" name="dTitle" value={this.state.dTitle} onChange={e => {this.handleNewTitleChange(e)}} style={{'width': 100+'%'}}/>
            </div>
            <div className="modal-event-color">
              <label>Color:</label><br></br>
              <select  value={this.state.dColor} onChange={this.handleTitleColorChange} style={{'height': 20 + 'px'}}>
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
              <textarea value={this.state.dComment} onChange={this.handleCommentChange} rows={10}  style={{'width': 100 + '%'}} />
            </label>
            </div>
            </Modal>
        </td>
    );
  }
} 
export default Cell;