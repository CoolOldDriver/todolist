import React,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }
    render(){
        const {test,content} = this.props;//this.props.content,都放到一起
        return(
            <div onClick={this.handleClick}>{test}-{content}</div>
        )
    }
    handleClick(){
        const {deleteItem,index} = this.props;
        deleteItem(index)
        // this.props.deleteItem(this.props.index)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true
        }else{
            return false
        }
    }
}
TodoItem.propTypes={
    test:PropTypes.string,
    content:PropTypes.string.isRequired,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps={
    test:"hell word"
}
export default TodoItem;