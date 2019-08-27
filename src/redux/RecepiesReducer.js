export function recepiesReducer (state = {recepies: [], error: null, isBusy: false}, action
    ) {
        switch(action.type) {
            case 'FETCH_RECEPIES_PENDING': {
                return { ...state, isBusy:true }
            }
            case 'FETCH_RECEPIES_SUCCESS': {
                return { ...state, isBusy:false,  recepies: action.payload }
            }
            case 'FETCH_RECEPIES_FAILED' : {
                return {...state,isBusy:false, error: action.payload}
            }
            default: {
                return state
            }
        }

}