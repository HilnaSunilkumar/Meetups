import { createContext, useState } from "react";

//name start with caps cause createcontext conbtain a react component and react components name start with cpas.
const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouritesMeetup)=>{},
  removeFavourite: (meetupId)=>{},
  isFavourite: (meetupId)=>{}

});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavourites(favouritesMeetup) {
    setUserFavourites((previousFavourites) => {
      return previousFavourites.concat(favouritesMeetup);
    });
  }

  function removeFavourites(meetupId) {
    setUserFavourites((previousFavourites) => {
      return previousFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function isFavourites(meetupId) {
      console.log('favourites')
     return userFavourites.some((meetup) =>meetup.id === meetupId );
    
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavourites,
    removeFavourite: removeFavourites,
    isFavourite:isFavourites
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}
export default FavouritesContext;