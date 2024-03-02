import './App.css';
import Forms from './components/Forms/JoinRoomForm';
import { Routes, Route } from 'react-router-dom';
import RoomPage from './pages/RoomPage/RoomPage';

const App = () => {

  return (
    <>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Forms />}/>
            <Route path='/:roomId' element={<RoomPage/>}/>
          </Routes>
        </div>
    </>
  )
}

export default App;
