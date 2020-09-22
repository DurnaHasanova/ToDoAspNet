import React, { Component } from 'react'

export default class ToDoItems extends Component {

    onCheckHandler=()=>{
        this.props.completedhandler(this.props.id)
    }
    onClickHandler=(e)=>{
        console.log(e.target.innerHTML)
        this.props.editToDo(e.target.innerHTML, this.props.todos.id)
    }
    render() {
        return (
            <div >
                
                <p><input type="checkbox"  onChange={this.onCheckHandler}></input>
                <span onClick={this.onClickHandler}>{this.props.todos.task}</span>
                </p>
                
            </div>
        )
    }
}
