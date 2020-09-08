import React from 'react'
import './App.css'

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
        // thie.setState({
            
        // })
    }


//Render
    render(){
        return(
            <div className='counter-app'>
                <div className='button-bar'>
                    <h1>Counter App</h1>
                </div>
                <div className='button-bar'>
                    <button onClick={this.handleIncrease}>increase</button>
                    <button onClick={this.handleDecrease}>decrease</button>
                    <button onclick={this.handleReset}>reset</button>
                </div>
                <div className='input-form'>
                    <form onSubmit={this.handleSubmit}> 
                        <label >
                            <h3>Set Minimum Value</h3>
                            <input value={this.state.minVal} onChange={this.handleMinVal} placeholder={'minimum value'}/>
                        </label>
                        <br></br>
                        <label>
                            <h3>Set Maximum Value</h3>
                            <input value={this.state.maxVal} onChange={this.handleMaxVal} placeholder={'maximum value'}/>
                        </label>
                        <br></br>
                        <label>
                            <h3>Set Step</h3>
                            <input value={this.state.step}   onChange={this.handleStep} placeholder={'step'}/>
                        </label>
                        <br></br>
                        <button>Subbmit</button>
                    </form>
                </div>
             </div>   
        )
    }
}
