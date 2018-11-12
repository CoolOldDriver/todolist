import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './actionType.js';
export const getInputChangeActon = (value) =>({
    type:CHANGE_INPUT_VALUE,
    value
})