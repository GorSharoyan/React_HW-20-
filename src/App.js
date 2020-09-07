import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            count:0,
            step:0,
        }
    }

    handleIncrease=()=>{
        this.setState((prevState)=>({
            count:prevState.count+prevState.step
        }))
    }   
    

    handleDecrease=()=>{
        this.setState((prevState)=>({
            count:prevState.count-prevState.step
        }))
   
    }      

    
    handleReset=()=>{
        this.setState((prevState)=>({
            count:0,
            step:0,
        }))
    }

    render(){
        return(
            <div>
                <div>
                    <button onClick={this.handleIncrease}>increase</button>
                    <button onClick={this.handleDecrease}>decrease</button>
                    <button onclick={this.handleReset}>reset</button>
                </div>
                <div>
                    <input placeholder={'minimum value'}/>
                    <input placeholder={'maximum value'}/>
                    <input placeholder={'step'}/>
                </div>
             </div>   
        )
    }
}