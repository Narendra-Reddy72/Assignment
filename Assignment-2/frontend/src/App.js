import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import TodoSignupForm from './pages/TodoSignupForm';
import TodoList from './pages/TodoList';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/create' element={<TodoSignupForm/>}/>
          <Route path='/todo' element={<TodoList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
