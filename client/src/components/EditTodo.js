import React from 'react';
import axios from 'axios';

export default class EditTodo extends React.Component{
    state={
        todo: '',
    }
    inputChangeHandler = (e)=>{
        this.setState({todo: e.target.value});
    }
    updateHandler = (id)=>{
        axios.put(`/todos/${id}`, { description: this.state.todo })
        .then(res => {
            this.setState({todo : res.data})
        })
        .catch(e=>console.error(e));
        window.location="/";
    }
    render(){
        return (
            <>
            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target={`#${this.props.id}`}>
                Edit
            </button>

            <div className="modal" id={this.props.id}>
                <div className="modal-dialog">
                <div className="modal-content">
                
                    <div className="modal-header">
                    <h4 className="modal-title">Edit Todo</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <div className="modal-body">
                        <input type="text" className="form-control" defaultValue={this.props.desc} onChange={ this.inputChangeHandler }/>
                    </div>
                    
                    <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={() => this.updateHandler(this.props.id)}>Update</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    
                </div>
                </div>
            </div>
            </>
        )
    }
}