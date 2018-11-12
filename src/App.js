import React,{  Component,Fragment }from 'react';
import './react-transition-group.css'

import { CSSTransition,TransitionGroup } from 'react-transition-group';
// 插件写动画
class App extends Component{
    constructor(props){
        super(props);
        this.handleCssClick=this.handleCssClick.bind(this);
        this.handleGroupClick=this.handleGroupClick.bind(this);
        this.state={
            show:true,
            list:[]
        }
    }
    handleCssClick(){
        this.setState({
            show:this.state.show?false:true 
        })
    }
    handleGroupClick(){
        this.setState((prevState)=>{
            return{
                list:[...prevState.list,"item"]
            }
        })
    }
    
    render(){
        return(
            <Fragment>
                <CSSTransition 
                    in={this.state.show}
                    timeout={1000}  //时间
                    classNames='fade' //class的前缀
                    unmountOnExit //结束动画时卸载组件 还有很多钩子函数看文档
                    appear={true} //希望加载完网页就执行，css还要加类名

                >
                    <div >aaa</div>
                </CSSTransition>
                <TransitionGroup>
                    {
                        this.state.list.map((value,index)=>{
                            return (
                                <CSSTransition
                                    // in={this.state.show}
                                    timeout={1000}  
                                    classNames='fade' 
                                    unmountOnExit 
                                    key={index}//不能用value的原因是都是写的item 一样了，所以index
                                    // appear={true} 
                                >
                                    <div>{value}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>

                <button onClick={this.handleCssClick}>点击单体</button>
                <button onClick={this.handleGroupClick}>点击Group</button>
            </Fragment>
        )
    }
}
export default App;