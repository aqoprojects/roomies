import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Homepage from './Homepage';
import SignupPage from './pages/SignupPage';
import VerificationPage from './pages/VerificationPage';
import ForgetpasswordPage from './pages/ForgetpasswordPage';
import ResetpasswordPage from './pages/ResetpasswordPage';
import RguestPage from './pages/RguestPage';
import MsuccessPage from './pages/MsuccessPage';
import ChatMessagePage from './pages/ChatMessagePage';
import ChatListPage from './pages/ChatListPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/verify' element={<VerificationPage/>} />
        <Route path='/rguest' element={<RguestPage/>} />
        <Route path='/sent' element={<MsuccessPage/>} />
        <Route path='/fpassword' element={<ForgetpasswordPage/>} />
        <Route path='/rpassword' element={<ResetpasswordPage/>} />

        <Route path='/:username' element={<UserProfilePage/>} />

        <Route path='/chats' element={<ChatListPage/>} />
        <Route path='/chats/:id/' element={<ChatMessagePage/>} />








        
        <Route path='/design' element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
