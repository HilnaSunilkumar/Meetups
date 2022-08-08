import { useNavigate } from "react-router";
import { NewMeetupForm } from "../components/meetup/NewMeetupForm";

export function NewMeetup() {
    const navigate = useNavigate();
    function addMeetup(meetupData){
        fetch('https://react-meetup-app-229ac-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        }).then(()=>{
            navigate('/');
        });
    }

    return (
     <section>
        <h1> Add New Meetup   </h1>
      <NewMeetupForm OnAddMeetup={addMeetup}/>
    </section>
    );
  }
  
  