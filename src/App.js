import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div>
                    <button>increase</button>
                    <button>decrease</button>
                    <button>reset</button>
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