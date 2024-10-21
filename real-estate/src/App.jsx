
import HomePage from './components/HomePage';
import './App.css'
import NavBar from './components/NavBar';
import SignupPage from './components/SignupPage';
import PostProperty from './components/PostProperty';
import AdminLogin from './admin/AdminLogin';
import ForgotPassword from './components/ForgotPassword';
import Notification from './components/Notification';
import UserProfile from './components/UserProfile';
import AdminDashboard from './admin/AdminDashboard';
import FilterHome from './components/FilterHome';
import Rent from './components/Rent';
import Agents from './components/Agents';
import MyPost from './components/MyPost';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
function App() {
  // var cors = require('cors');
  // app.use(cors())
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage></HomePage>}></Route>
          <Route path='/navbar' element={<NavBar></NavBar>}></Route>
          <Route path='/notification' element={<Notification></Notification>}></Route>
          <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/admind' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/postproperty' element={<PostProperty></PostProperty>}></Route>
          <Route path='/signuppage' element={<SignupPage></SignupPage>}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path='/userprofile' element={<UserProfile></UserProfile>}></Route>
          <Route path='/mypost' element={<MyPost></MyPost>}></Route>
          <Route path='/buy' element={<FilterHome/>}/>
          <Route path='/adminlogin'element={<AdminLogin></AdminLogin>}/>
          <Route path='/rent' element={<Rent/>}/>
          <Route path='/agents' element={<Agents/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
