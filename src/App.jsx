import './App.css'
import { Outlet } from 'react-router-dom';
import Login from './pages/Login.jsx';
import { UserNameProvider } from './contexts/userNameContext.jsx'; 

function App() {

  return (
      <div className='App'>
        <Login/>
        <Outlet/>
      </div>
  )
}

export default App
