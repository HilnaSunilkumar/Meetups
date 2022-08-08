import { useContext } from 'react'
import FavouritesContext from '../../store/favourites-context'
import { Card } from '../commonUi/Card'
import Class from './MeetupItem.css'

export function MeetupItem(props){
    const favContext = useContext(FavouritesContext);

    const isFav = favContext.isFavourite(props.id)

    function toggleFavourites(){
        console.log('click', isFav)
        if(isFav){
            favContext.removeFavourite(props.id);
        }else{
            favContext.addFavourite({
                id:props.id,
                title:props.title,
                image:props.image,
                address:props.address,
                description:props.description 
            }) ;  
         }

    }

    return (
    <li className='item'>
        <Card>
        <div className='image'>
        <img  src={props.image} alt={props.title}/>
        </div>
        <div className='content'>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className='actions'>
        <button onClick={toggleFavourites}>{isFav ? 'Remove from Favourites': 'To Favourites'}</button>
        </div>
        </Card>
    </li>
    ) 
}