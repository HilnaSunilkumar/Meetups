import { Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { AllMeetups } from "./pages/AllMeetups";
import { Favourites } from "./pages/Favourites";
import { NewMeetup } from "./pages/NewMeetup";

function App() {
  return (
    <div>    
      <Layout>
      <Routes>
      <Route path='/'  element={<AllMeetups/>} > </Route>
      <Route path='/new-meetup' element={<NewMeetup />}></Route>
      <Route path='/favourites' element={<Favourites />} ></Route>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
