import { MeetupItem } from './MeetupItem'
import Class from './MeetupList.css'

export function MeetupList(props){
    return (
    <ul className='list'>
        {props.meetups.map(meetup =>{
           return <MeetupItem key={meetup.id} 
            id={meetup.id} 
            image={meetup.image} 
            title={meetup.title}
            address={meetup.address}
            description={meetup.description} 
            />
        })}
    </ul>
    )
}