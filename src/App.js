import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            count:0,
            step:0,
            maxVal:9999,
        }
    }
//Buttons

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
            maxVal:9999,
        }))
    }
//Form

    handleMinVal=(event)=>{
        this.setState({
            count:event.target.value
        })
    }
    handleMaxVal=(event)=>{
        this.setState({
            maxVal:event.target.value
        })
    }

    handleStep=(event)=>{
        this.setState({
            step:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        
    }


//Render
    render(){
        return(
            <div>
                <div>
                    <button onClick={this.handleIncrease}>increase</button>
                    <button onClick={this.handleDecrease}>decrease</button>
                    <button onclick={this.handleReset}>reset</button>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}> 
                        <label>
                            <input value={this.state.minVal} onChange={this.handleMinVal} placeholder={'minimum value'}/>
                        </label>
                        <label>
                            <input value={this.state.maxVal} onChange={this.handleMaxVal} placeholder={'maximum value'}/>
                        </label>
                        <label>
                            <input value={this.state.step}   onChange={this.handleStep} placeholder={'step'}/>
                        </label>
                        <button>Subbmit</button>
                    </form>
                </div>
             </div>   
        )
    }
}