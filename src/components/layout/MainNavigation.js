import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouritesContext from "../../store/favourites-context";
import classes from './MainNavigation.css'

export function MainNavigation(){
    const favContext = useContext(FavouritesContext);

return <header className='header'>
<div className='logo'> React Meetups</div>
<nav>
    <ul>
        <li><Link to='/'> All Meetups</Link></li>
        <li><Link to='/new-meetup'> Add New Meetup</Link></li>
        <li><Link to='/favourites'> My Favourites <span className='badge'>{favContext.totalFavourites}</span></Link></li>      
    </ul>
</nav>
</header>

}