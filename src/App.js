import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            count:0,
            step:1,
            maxVal:0,
            minVal:0,
        }
    }
//Buttons

    handleIncrease=()=>{
        if(this.state.count<this.state.maxVal){
        this.setState((prevState)=>({
            count:prevState.count+Number(prevState.step),
        }))
     }
    }   
    

    handleDecrease=()=>{
        if(this.state.count>this.state.minVal){
       this.setState((prevState)=>({
            count:prevState.count-Number(prevState.step),
        }))
     }
    }      

    
    handleReset=()=>{
        this.setState((prevState)=>({
            count:0,
            step:1,
            maxVal:0,
            minVal:0,
        }))
        
    }
//Form

    handleMinVal=(event)=>{
      let validValue=!Number.isNaN(Number(event.target.value));
      if(validValue){  
        this.setState({
            minVal:event.target.value
        })
     }
    }
    handleMaxVal=(event)=>{
        let validValue=!Number.isNaN(Number(event.target.value));  
        if(validValue){ 
        this.setState({
            maxVal:event.target.value
        })
     }
    }
    handleStep=(event)=>{
        this.setState({
            step:event.target.value
        })
    }
    handleSubmit=(event)=>{
        localStorage.setItem('state',JSON.stringify(this.state))
    
    }


//Render
    render(){
        return(
            <div className='counter-app'>
                <div className='button-bar'>
                    <h1>Counter App</h1>
                </div>
                <div className='button-bar'>
                    <Button variant="outlined" size="medium" color="primary"  onClick={this.handleIncrease}>
                        Increase
                    </Button>
                    <Button variant="outlined" size="medium" color="primary"  onClick={this.handleDecrease}>
                        Decrease
                    </Button>
                    <Button variant="outlined" size="medium" color="primary"  onClick={this.handleReset}>
                        Reset
                    </Button>
                </div>
                <div className='counter-value'>
                    <p>{this.state.count}</p>
                </div>   
                <div className='input-form'>
                    <form onSubmit={this.handleSubmit}> 
                        <label >
                            <h3>Set Minimum Value</h3>
                            <TextField id="outlined-basic" label="Minimum Value" variant="outlined" type='number'
                             value={this.state.minVal} onChange={this.handleMinVal}  />
                        </label>
                        <br></br>
                        <label>
                            <h3>Set Maximum Value</h3>
                            <TextField id="outlined-basic" label="Maximum Value" variant="outlined" type='number'
                             value={this.state.maxVal} onChange={this.handleMaxVal} />
                        </label>
                        <br></br>
                        <label>
                            <h3>Set Step</h3>
                            <TextField id="outlined-basic" label="Step" variant="outlined" type='number'
                             value={this.state.step} onChange={this.handleStep} />
                        </label>
                        <br></br>
                        <Button variant="contained" color="primary" href="#contained-buttons" onClick={this.handleSubmit} >
                            Submit
                        </Button>
                    </form>
                </div>
                <footer>
                    <hr></hr>
                    <p>(C) Copyright Gor SHAROYAN /</p>
                    <p> UI created by using :https://material-ui.com</p>
                </footer>   
             </div>   
        )
    }
}
