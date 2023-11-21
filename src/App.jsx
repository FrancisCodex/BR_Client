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
import Mapdef from './components/map/mapdef'
import Verifyemail from './components/verifyemail'


function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            {/* Default User Values / Publicly Access Web pages */}
            <Route path='/' element={<Home/>}/>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/register' element={<Signup/>}/>
            <Route path='/map' element={<Mapdef/>}/>

            {/* Email Links */}
            <Route path='/user/verify' element={<Verifyemail/>}/>

            {/* Protected Routes */}
            <Route path='/user/profile' element={<ProtectedPage> <Profile /> </ProtectedPage>} />
            <Route path='/property-manager/register' element={<ProtectedPage> <OwnerRegister/> </ProtectedPage>} />
            <Route path='/property-manager/profile' element={<ProtectedPage> <OwnerRegister/> </ProtectedPage>} />
            <Route path='/listings' element={<ProtectedPage> <Listings/> </ProtectedPage>}/>

            {/* Routes that take Parameters */}
            <Route path='/user/verified' element={<Verifyemail/>}/>


            {/* Footer Links */}
            


            {/* Error 404 Page */}
            <Route path='*' element={<Errorpage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}


export default App
