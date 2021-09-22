import { TOGGLE_FILTER } from "../Actions/actionsTypes";

const initState='all'

const FilterReducer = (state=initState,{type,payload}) => {
    
        switch (type) {
            case TOGGLE_FILTER:
                return payload;
               
                  default: return state
    
}}

export default FilterReducer
