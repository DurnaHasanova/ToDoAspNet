import React, { Component } from 'react'
import DoneList from './DoneList';
import ToDoForm from './ToDoForm';

import ToDoItems from './ToDoItems';
import DoneItems from './DoneItems';
import ToDoEditForm from './ToDoEditForm'

export default class ToDoList extends Component {
    state={
        todo:[{id:0,task:"Test!", isdone:false},{id:1,task:"Reading Book!", isdone:true}],
        editform:false,
        editbody:"",
        editId:-1


    }


    createHandler=(newTask)=>{
        const data={

            id:this.state.todo.length,
            task:newTask,
            isdone:false
        }
        this.setState({todo:[...this.state.todo, data]})
    }
    completedHandler=(index)=>{
        this.setState({todo:[...this.state.todo.map((item,key)=>{

            if(key===index){
                return({...item, isdone:true});
            }
            else{
                return item;
            }
        })]})
    }

    editToDo=(text,id)=>{
        this.setState({editform:true})
        this.setState({editbody:text})
        this.setState({editId:id})

    }
    editHandler=(body, id)=>{
        console.log("editHandler" + body+id)
        this.setState({todo:[...this.state.todo.map((item,key)=>{
                
            if(key===id){
                this.setState({editform:false})

                return({...item, task:body});
            }
            else{
                return item;
            }
        })]})
    }
    render() {
        return (
            <div>
                <ToDoForm  createTodo={this.createHandler}></ToDoForm>
                {
                    this.state.todo.filter(i=>!i.isdone).map((item,index)=>{
                        console.log(item)
                        return(
                            <ToDoItems completedhandler={this.completedHandler} id={item.id} key={index} todos={item} editToDo={this.editToDo}></ToDoItems>
                        )
                    })
                 
                }

                <DoneList> </DoneList>
                {
                       this.state.todo.filter(i=>i.isdone).map((item,index)=>{
                        //    debugger;
                        
                        return(
                            <DoneItems id={item.id} key={index} todos={item} editToDo={this.editToDo} ></DoneItems>
                        )
                    })
                }

                    
                
                   {
                       this.state.editform&&
                       <ToDoEditForm editBody={this.state.editbody} editHandler={this.editHandler} id={this.state.editId}></ToDoEditForm>
                   } 
                   
                
               
            </div>
        )
    }
}
