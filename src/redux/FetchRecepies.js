import axios from 'axios'

export function fetchRecepies () {
    return function (dispatch) {
        dispatch({
            type:'FETCH_RECEPIES_PENDING',
            payload:null,
            isBusy: true
        })
        axios.get(
            'https://jsonplaceholder.typicode.com/todos'
            ).then((response) => {
                    dispatch({
                        type: 'FETCH_RECEPIES_SUCCESS',
                        payload: response.data,
                        isBusy: false
                    })
            }).catch((error)=>{
                dispatch({
                    type: 'FETCH_RECEPIES_FAILED',
                    payload: error,
                    isBusy: true
                })
            })
    }
}