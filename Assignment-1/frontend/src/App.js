import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import EventCreateForm from './pages/EventCreateForm';
import EventList from './pages/EventList';
import EditEvents from './pages/EditEvents';
import EventCalendar from './pages/EventCalendar';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path=''element= {<Navbar/>}/>
          <Route path='/createEvent' element={<EventCreateForm/>}/>
          <Route path='/readEvent' element={<EventList/>}/>
          <Route path="/EditEvent/:event_id" element={<EditEvents />} />
          <Route path='Eventcalendar' element={<EventCalendar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
