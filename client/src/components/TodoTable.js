import React from 'react';
import axios from 'axios';

export default class TodoTable extends React.Component{
    state={
        todos: []
    }
    componentDidMount(){
        axios.get(`/todos`)
        .then(res => {
            this.setState({todos : res.data})
            console.log(this.state.todos)
        })
        .catch(e=>console.error(e));
    }
    // updateHandler = (id)=>{
    //     axios.put(`/todos/${id}`)
    //     .then(res => {
    //         this.setState({todos : res.data})
    //         console.log(this.state.todos)
    //     })
    //     .catch(e=>console.error(e));
    // }
    deleteHandler = (id)=>{
        axios.delete(`/todos/${id}`)
        .then(res => {
            this.setState({todos: this.state.todos.filter(todo => todo._id !== id)});
            console.log(res);
        })
        .catch(e=>console.error(e));
    }
    render(){
        return (
            <>
            {/* {this.state.todos} */}
            <table className="table table-hover mt-5">
                <thead className="thead-dark">
                <tr>
                    <th>Description</th>
                    <th>Added on</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.todos.map(todo=>{
                        return (
                            <tr key={todo._id}>
                                <td>{todo.description}</td>
                                <td>{todo.date}, {todo.time}</td>
                                <td><button className="btn btn-secondary" onClick={() => this.updateHandler(todo._id)}>Edit</button></td>
                                <td><button className="btn btn-danger" onClick={() => this.deleteHandler(todo._id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </>
        );
    }
}