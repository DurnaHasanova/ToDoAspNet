import React, { Component } from 'react'

export default class DoneItems extends Component {
    onClickHandler=(e)=>{
        console.log(e.target.innerHTML)
        this.props.editToDo(e.target.innerHTML, this.props.todos.id)
    }
    render() {
        //console.log(this.props)
        return (
            <div>
                 <p >
                     <input type="checkbox" checked={this.props.todos.isdone}></input>
                     
                     <span onClick={this.onClickHandler}>{this.props.todos.task}</span>
                     </p>
            </div>
        )
    }
}
