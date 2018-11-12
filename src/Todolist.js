import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem.js';
import axios from 'axios';
import App from './App';

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:"",
            list:[]
        }
    }
    componentDidMount(){
        axios.get('./ceshi.json').then(()=>{alert("ok")}).catch(()=>{alert("no")})
    }
    handleInputChange(e){
        // this.setState({
        //     inputValue:e.target.value
        // }) 这是以前的方法传入一个对象
        // const value=e.target.value //在setState里传入函数是异步函数，所以把e.targer.value写在函数里有问题，
                                    //所以需要把他拿出来定义一下
        const value=this.a.value;//不推荐使用ref，操作真实DOM
        this.setState(()=>({
            inputValue:value
        }))

    }
    handleBtnClick(){
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:""
        // })

        this.setState((prevSatate)=>({
            list:[...prevSatate.list,prevSatate.inputValue],
            inputValue:""
        }))
    }
    handleItemDelete(index){
        // console.log(index)
        // const list=[...this.state.list];
        // list.splice(index,1);
        // this.setState({
        //     list:list
        // })
        this.setState((prevSatate)=>{
            const list=[...prevSatate.list];
            list.splice(index,1);
            // return {list}//list等于 list:list

        })
    }
    getTodolist(){
        return(
            this.state.list.map((value,index)=>{
            return (   
                    <div>
                        <TodoItem content={value} 
                            index={index} 
                            deleteItem={this.handleItemDelete.bind(this)}/>
                        {/*
                        <li     
                             key={index} 
                             onClick={this.handleItemDelete.bind(this,index)}
                             dangerouslySetInnerHTML={{__html:value}}
                        >
                            
                         </li>
                        
                        */}
                         
                    </div> 
                    )
        })
        )
    }
    render(){
        return(
           
            <Fragment>
                    <label htmlFor="insertArea">输入内容</label>
                    <input id="insertArea" type="text" ref={(a)=>{this.a=a}} value={this.state.inputValue} 
                        onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>

                    <ul>
                        {
                            this.getTodolist()    
                        }
                    </ul>
                    
                         <App />
                    
            </Fragment>
            
        )
    }
}


export default Todolist;