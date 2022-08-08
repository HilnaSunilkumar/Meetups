import { useEffect, useState } from "react";
import { MeetupList } from "../components/meetup/MeetupList";


export function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-meetup-app-229ac-default-rtdb.firebaseio.com/meetups.json')
        .then((response)=>{
            return response.json(); // json() will return a promise
        }).then(data => {
            //data is an object so map it to array
            const allMeetups = [];

            for(const key in data){
                const meetup ={
                    id:key,
                    ...data[key]
                };
                allMeetups.push(meetup);
            }

            setIsLoading(false);
            setMeetups(allMeetups);
        });
    },[])

    

    if(isLoading){
        return (
        <section>
            <h2>Loading...</h2>
        </section>
        )
    }

    return (
    <section> 
          <h1> All Meetups</h1>  
          <MeetupList  meetups={meetups}/>
    </section>
    );
  }
  
  