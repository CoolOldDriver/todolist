import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './actionType.js'

const defaultState={
    inputValue:"",
    list:[]
}

export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state));//深拷贝 在reducer中不要修改state，所以只能重新复制一个
        newState.inputValue=action.value;
        return newState
    }
    if(action.type==='add_todo_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);//将新数据添加到list里面
        newState.inputValue='';//清空input的值
        return newState//然后将全新的数据返回
    }
    if(action.type==='delete_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState
    }
    // console.log(state,action)
    return state
}