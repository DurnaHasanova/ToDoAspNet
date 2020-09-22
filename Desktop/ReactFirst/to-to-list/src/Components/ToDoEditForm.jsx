import React, { Component } from 'react'

export default class ToDoEditForm extends Component {
    state={
        task:""
    }
    onChangeHandler=(e)=>{
        console.log(e.target.value)
        this.setState({task:e.target.value})
    }
    onClickHandler=()=>{
        console.log("on click handler")
        console.log(this.state.task)
       this.props.editHandler(this.state.task, this.props.id)
       this.setState({task:""})
      
    }
    render() {
        return (
            <div>
                <h1>Edit Form</h1>
                 <div>
                <input type="text" defaultValue={this.props.editBody} onChange={this.onChangeHandler} />
                <button onClick={this.onClickHandler} >Edit</button>
                
            </div>
            </div>
        )
    }
}
