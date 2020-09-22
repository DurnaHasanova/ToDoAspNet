import React, { Component } from 'react'

export default class Counter extends Component {

    state={
        count:0
    }
    Plus = () => {
        
        this.setState({count:this.state.count+1})
      }
      Minus = () => {
        this.setState({count:this.state.count-1})
      }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={this.Plus}>+</button>
                    <button onClick={this.Minus}>-</button>
                </div>
            </div>
        )
    }
}
