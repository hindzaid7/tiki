import {
    DESIGN_LIST_REQUEST,
    DESIGN_LIST_SUCCESS,
    DESIGN_LIST_FAIL,

    DESIGN_DETAILS_REQUEST,
    DESIGN_DETAILS_SUCCESS,
    DESIGN_DETAILS_FAIL,
} from '../constants/designConstants'

export const designListReducer = (state = {designs: []}, action) =>{
    switch(action.type){
        case DESIGN_LIST_REQUEST:
            return { loading:true, designs: [] }
        
        case DESIGN_LIST_SUCCESS:
            return { loading: false, designs: action.payload}
        
        case DESIGN_LIST_FAIL:
            return { loading: false, error: action.payload}
        
        default:
            return state
        

    }
}

export const designDetailsReducer = (state = {design: {reviews:[]}}, action) =>{
    switch(action.type){
        case DESIGN_DETAILS_REQUEST:
            return { loading:true, ...state }
        
        case DESIGN_DETAILS_SUCCESS:
            return { loading: false, design: action.payload}
        
        case DESIGN_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        
        default:
            return state
        

    }
}