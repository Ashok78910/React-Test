
const intialState = {
    supplierData : [],
    state_list : [],
    country_list : [],
    city_list : []

}

export const apiReducer = (state = intialState,action) => {
    switch(action.type){
        case "GET_SUPPLIER_DATA" : {
            return {
                ...state,
                supplierData : action.payload 
            }
        }

        case "GET_COUNTRY_LIST" :{
            return {
                ...state,
                country_list : action.payload 
            }
        }

        case "GET_STATE_LIST" :{
            return {
                ...state,
                state_list : action.payload }
        }

        case "GET_CITY_LIST" :{
            return {
                ...state,
                city_list : action.payload }
        }
        default : 
        return state;
    } 
        
    
}