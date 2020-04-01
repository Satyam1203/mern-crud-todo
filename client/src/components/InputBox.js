import React from 'react';
import axios from 'axios';

class InputBox extends React.Component{
    state={
        todo: '',
        allTodos: []
    }
    inputChangeHandler = (e)=>{
        this.setState({todo: e.target.value});
    }
    addTodoHandler = ()=>{
        console.log(this.state.todo);
        axios.post(`/todos`, { description: this.state.todo })
        .then(res => {
            this.setState({allTodos : res.data})
            console.log(this.state.allTodos)
        })
        .catch(e=>console.error(e));
    }
    render(){
        return (
            <div className='container text-center mt-5'>
                <h2>Enter your TO-DO</h2>
                <div className="input-group w-50 mx-auto">
                <input type="text" id="todo" className="form-control" placeholder="To be Done" onChange={this.inputChangeHandler}/>
                <div className="input-group-append">
                    <button className="btn btn-success" onClick={this.addTodoHandler}>Add</button>
                </div>
                </div>
            </div>
        );
    }
}

export default InputBox;