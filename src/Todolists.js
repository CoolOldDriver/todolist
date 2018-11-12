import React,{Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store/index.js'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './store/actionType.js'
import {getInputChangeActon} from './store/actionCreators'

class Todolists extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();//得到store里面的state
        // console.log(store.getState())
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange)//订阅store的改变，只要改变就触发里面的函数，然后函数里面的setState改变store.getState()的值
        
    }
    handleBtnClick(){
        const action={
            type:ADD_TODO_ITEM,

        }
        store.dispatch(action)
    }
    handleInputChange(e){//
        // const action ={
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getInputChangeActon(e.target.value)
        // console.log(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange(){
        this.setState(store.getState())//通过store.subscribe()调用这个函数从而重新
                            //有调用store.getState重新获取数据,直接调用这个函数，但是没在前面加this.state就可以直接用
    }
    handleItemDelete(index){
        const action ={
            type:DELETE_ITEM,
            index//等于 index:index
        }
        store.dispatch(action)
    }
    render(){
        return(
            <Fragment>
                
                <Input value={this.state.inputValue} placeholder={'haha'} style={{width:'300px'}} onChange={this.handleInputChange}/>
                <Button type="primary" block style={{width:'100px'}} onClick={this.handleBtnClick}>提交</Button>
                <List
                    style={{width:'300px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(item,index)}>{item}</List.Item>)}
                />

            </Fragment>
            
        )
    }
}

export default Todolists