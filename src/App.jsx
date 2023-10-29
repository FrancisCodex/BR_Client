import './App.css'
import Login from './components/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Signup from './components/signup'
import Profile from './components/protected/profile'
import { AuthProvider, ProtectedPage} from './components/authentication/AuthProvider'
import OwnerRegister from './components/roles/owners/ownerRegister'
import Listings from './components/properties/listings'
import Errorpage from './components/errorpage'


function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            {/* Default User Values  */}
            <Route path='/' element={<Home/>}/>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/register' element={<Signup/>}/>

            {/* Protected Routes */}

            <Route path='/user/profile' element={<ProtectedPage> <Profile /> </ProtectedPage>} />
            <Route path='/property-manager/register' element={<ProtectedPage> <OwnerRegister/> </ProtectedPage>} />
            <Route path='/property-manager/profile' element={<ProtectedPage> <OwnerRegister/> </ProtectedPage>} />
            <Route path='/listings' element={<ProtectedPage> <Listings/> </ProtectedPage>}/>

            <Route path='*' element={<Errorpage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}


export default App
