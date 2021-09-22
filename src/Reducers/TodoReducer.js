
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO} from '../Actions/actionsTypes';
import {DELETE_TODO} from '../Actions/actionsTypes';
import {TOGGLE_TODO} from '../Actions/actionsTypes';
const initState=[{id:uuidv4(),
    description :'Wake up',
    isDone:false,

}]
const TodoReducer = (state=initState,{type,payload}) => {
    
        switch (type) {
            case ADD_TODO:
                return [payload,...state];
                case DELETE_TODO:
                return state.filter(elm=>elm.id !== payload)
                case TOGGLE_TODO:
                    return state.map(elm=>elm.id === payload?{...elm,isDone:!elm.isDone}:elm)
                default:
                 return state;}}

export default TodoReducer
