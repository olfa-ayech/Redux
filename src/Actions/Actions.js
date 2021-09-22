import { ADD_TODO,DELETE_TODO, TOGGLE_TODO,TOGGLE_FILTER} from "./actionsTypes"
import {v4 as uuidv4 } from 'uuid'
export const addTodo =  (description) => {
    return {
        type: ADD_TODO,
        payload : {
            id: uuidv4(),
            description,
            isDone:false

        }
    }
}
export const deleteTodo =  (id) => {
    return {
        type: DELETE_TODO,
        payload :id

        }
    }
    export const toggleTodo =  (id) => {
        return {
            type: TOGGLE_TODO,
        
            payload :id
    
            }
        }
        export const toggleFilter =  (filter) => {
            return {
                type: TOGGLE_FILTER,
            
                payload :filter
        
                }
            }