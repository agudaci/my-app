
export function RemoveFromFavorites (item) {
    return function (disaptch){
        disaptch ({
            type:'REMOVE_FROM_FAVORITES',
            payload: item
        })
    }
}