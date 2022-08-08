import { useRef } from "react";
import { Card } from "../commonUi/Card";
import Class from './NewMeetupForm.css'

export function NewMeetupForm(props){
    const titleRef = useRef();
    const imageRef = useRef();
    const addrRef = useRef();
    const descRef = useRef();

    function submit(event){
        event.preventDefault();

        const enteredTitle = titleRef.current.value; 
        const enteredImage = imageRef.current.value; 
        const enteredAddress = addrRef.current.value; 
        const enteredDescription = descRef.current.value; 

        const meetupData = {
            title:enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        console.log(meetupData);
        props.OnAddMeetup(meetupData);
    }

    return <Card>
        <form className='form' onSubmit={submit}>
            <div className='control'>
                <label htmlFor='title'>Meetup Title</label>
                <input 
                type='text' 
                id='title' 
                ref={titleRef}  
                required />
            </div>
            <div className='control'>
                <label htmlFor='image'>Image</label>
                <input 
                type='url' 
                id='image' 
                ref={imageRef} 
                required/>
            </div>
            <div className='control'>
                <label htmlFor='address'>Address</label>
                <input 
                type='text' 
                id='address' 
                ref={addrRef} 
                required/>
            </div>
            <div className='control'>
                <label htmlFor='description'>Description</label>
                <textarea 
                  id='description'
                  rows='5' 
                  ref={descRef} 
                  required>
                  </textarea>
            </div>
            <div className='actions'>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}