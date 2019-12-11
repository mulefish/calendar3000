import React from "react";

import './Modal.css';

export default class Modal extends React.Component {

    handleClickModalUnderlay = e => {
        let targetClassName = e.target.className
        if(targetClassName && targetClassName === "modal-underlay") {
            this.props.handleClose()
        }
      }
      
  render() {
    if(!this.props.show){
        return null;
    }
    return <div className="modal-underlay" onClick={e => { this.handleClickModalUnderlay(e)}}>
                <div className="modal-main">
                    <div className="modal-inner">
                        <div>{this.props.children}</div>
                        <div className="modal-buttons">
                            <div>
                                {this.props.editMode?
                                <div>
                                    <button onClick={this.props.handleUpdate}>Update</button>
                                    <button onClick={this.props.handleDelete}>Delete</button>
                                    <button onClick={this.props.handleClose}>Close</button>
                                </div>
                                 :
                                 <div>
                                    <button onClick={this.props.handleAdd}>Add</button>
                                    <button onClick={this.props.handleClose}>Close</button>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
  }
}