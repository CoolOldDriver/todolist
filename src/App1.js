import React,{  Component,Fragment }from 'react';
import './transition.css';
// react写css动画

class App extends Component{
    constructor(props){
        super(props);
        this.handleCssClick=this.handleCssClick.bind(this);
        this.state={
            show:true
        }
    }
    
    handleCssClick(){
        this.setState({
            show:this.state.show?false:true 
        })
    }
    render(){
        return(
            <Fragment>
               
                    <div className={this.state.show?'show':'hide'} ref={(aaa)=>{this.aaa=aaa}}>aaa</div>
                
                <button onClick={this.handleCssClick}>点击</button>
                </Fragment>
            
        )
    }
}
export default AppOne;