import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props);
        // state{

        // }
    }

    handleIncrease(){

    }
    handleDecrease(){

    }
    handleReset(){

    }
    render(){
        return(
            <div>
                <div>
                    <button onClick={handleIncrease}>increase</button>
                    <button onClick={handleDecrease}>decrease</button>
                    <button onclick={handleReset}>reset</button>
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