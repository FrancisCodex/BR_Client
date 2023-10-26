import './App.css'
import Login from './components/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Signup from './components/signup'
import Profile from './components/protected/profile'
import { AuthProvider, ProtectedPage } from './components/authentication/AuthProvider'
import OwnerRegister from './components/roles/owners/ownerRegister'
import Listings from './components/properties/listings'


function App() {

  return (
    <>
     <AuthProvider>
        <BrowserRouter>
          <Routes>

           {/* Default User Values  */}
            <Route path='/' element={<Home/>}/>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/register' element={<Signup/>}/>
            <Route path='/user/profile' element={<ProtectedPage> <Profile /> </ProtectedPage>} />

            {/* Owner Side */}

            <Route path='/property-manager/register' element={<OwnerRegister/>}/>
            <Route path='/property-manager/profile' element={<OwnerRegister/>}/>

            {/* Listings */}

            <Route path='/listings' element={<ProtectedPage> <Listings/> </ProtectedPage>}/>

            
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
