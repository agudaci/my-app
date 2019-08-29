


export function  addItemToFavorites (item) {
    return function(dispatch) {
        dispatch({
            type: 'ADD_ITEM_TO_FAVORITES',
            payload: item
        })
    }
}


export function RemoveItemFromFavorites (id) {
    return function (disaptch){
        disaptch ({
            type:'REMOVE_FROM_FAVORITES',
            payload: id
        })
    }
}