import React, { Component } from 'react'
import ToDoItems from './ToDoItems'

export default class ToDoForm extends Component {
    state={
        task:""
    }
    onChangeHandler=(e)=>{
        console.log(e.target.value)
        this.setState({task:e.target.value})
    }
    onClickHandler=()=>{
       this.props.createTodo(this.state.task)
       this.setState({task:""})
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.task} onChange={this.onChangeHandler}/>
                <button onClick={this.onClickHandler} >Add</button>
                
            </div>
        )
    }
}
