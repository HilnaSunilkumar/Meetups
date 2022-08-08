import Class from './Layout.css'
import { MainNavigation } from './MainNavigation'

export function Layout(props){
    return <div> 
       <MainNavigation/> 
       <main className='main'>
        {props.children}
       </main>
    </div>
}