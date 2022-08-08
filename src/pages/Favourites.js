import { useContext } from "react";
import { MeetupList } from "../components/meetup/MeetupList";
import FavouritesContext from "../store/favourites-context";


export function Favourites() {
    const favContext = useContext(FavouritesContext);
    let content;

    if(favContext.totalFavourites === 0){
        content = <h3>You got no favourites yet. Start adding some ?</h3>;
    }else{
        content = <MeetupList meetups={favContext.favourites}/>
    }

    return (
        <section>
      <h1> My Favourites </h1>
      {content}
        </section>
    );
  }
  
  