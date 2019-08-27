export function recepiesReducer (state = {recepies: [], error: null}, action
    ) {
        switch(action.type) {
            case 'FETCH_RECEPIES_SUCCESS': {
                return { ...state, recepies: action.payload }
            }
            case 'FETCH_RECEPIES_FAILED' : {
                return {...state, error: action.payload}
            }
            default: {
                return state
            }
        }

}