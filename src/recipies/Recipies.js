import React from 'react'

import './recipies.css'
import SingleRecipie from './SingleRecipies.js';

const data = [
    {
        key:'tuna',
        description: 'tuna salad'
    },
    {
        key:'caesar',
        description: 'caesar salad'
    },
    {
        key:'mixed',
        description: 'mixed salad'
    },
    {
        key:'pesto',
        description: 'Pesto salad'
    }
]




const Reciepes = () => {
    const components = data.map((element) => {
        return <SingleRecipie 
        description = {element.description} 
        key={element.key}/>
    })
    
return <div id = 'recepies' className = 'flex-container'>
    
    {components}

    {/*<div className='flex-item'>
       <div id='tuna'> Tuna Salad</div>  
    <button className = 'btn btn-success'
    onClick={() => Store.dispatch(addItemToFavorites('tuna'))}
    >Add To Favourites</button>

        </div>

    <div className='flex-item'>
    <div id='caesar'>Caesar Salad</div>
    <button className = 'btn btn-success'
    onClick={() => Store.dispatch(addItemToFavorites('caesar'))}
    >Add To Favourites</button>
    </div>
 
    <div className='flex-item'>
< div id='mix'>MIxed Saladiv> </div>
<button className = 'btn btn-success'
onClick={() => Store.dispatch(addItemToFavorites('mix'))}
>Add To Favourites</button>
   </div>

    <div className='flex-item'>
<div id='pesto'>Pesto Salad</div>
<button className = 'btn btn-success'
onClick={() => Store.dispatch(addItemToFavorites('pesto'))}
>Add To Favourites</button>
</div>*/}

    </div>
}

export default Reciepes