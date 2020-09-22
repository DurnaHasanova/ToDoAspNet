import React, { Component } from 'react'

export default class CategoryList extends Component {

    state = {
        categories: this.props.categoryName,
        hide:true,
        buttonText:'Show'

    }

    Clear = () => {
        this.setState({ categories: [] })

    }

    Change = () => {
        const newIds = [...this.state.categories]
        var index=Math.floor(Math.random()*newIds.length);
        newIds[index] = 'HappyEnd' 
        
        this.setState({ categories: newIds })
    }
    Show = () => {
        var btntext=this.state.buttonText;
        if(btntext==="Show"){
            this.setState({buttonText:"Hide"});
            this.setState({hide:false});
        }
        else 
        {
            this.setState({buttonText:"Show"})
            this.setState({hide:true});
        }
       

    }
    render() {
        return (
            <div className="App">


                {
                    this.state.categories.map((cat, key) => (

                        <h1 className="cat" key={key}>{cat}</h1>
                    ))
                }


                <h1 id='hidden' hidden={this.state.hide} >Hola Mundo</h1>
                <div>
                    <button onClick={this.Clear}>Clear</button>
                    <button onClick={this.Change}>Change</button>
                    <button onClick={this.Show} id='Show' >{this.state.buttonText}</button>
                </div>
            </div>

        )
    }
}
