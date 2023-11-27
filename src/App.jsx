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
import Mapcontainer from './components/map/mapcontainer'
import Uploadproperty from './components/roles/owners/uploadproperty'
import Listproperty from './components/roles/owners/listproperty'
import Unauthorized from './components/unauthorized'
import OwnerDashboard from './components/roles/owners/ownerDashboard'
import RoleCheck from './components/authentication/roleCheck'
import { ThemeProvider } from "@material-tailwind/react";
import Testupload from './components/roles/owners/testupload'


function App() {

  const ROLES = {
    GENERAL: ['admin', 'owner', 'renter'],
    MANAGERS: ['admin', 'owner'],
    ADMIN: ['admin']
  };
  
  console.log("What is the role: ", ROLES.GENERAL);
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>

              {/* Default User Values / Publicly Access Web pages */}
              <Route path='/' element={<Home/>}/>
              <Route path='/auth/login' element={<Login/>}/>
              <Route path='/register' element={<Signup/>}/>
              <Route path='/property-manager/register' element={<OwnerRegister/>}/>

              {/* Protected Routes */}
              <Route path='/user/profile' element={<ProtectedPage> <RoleCheck allowedRoles={ROLES.GENERAL}> <Profile /> </RoleCheck> </ProtectedPage>} />
              <Route path='/listings' element={<ProtectedPage> <Listings/> </ProtectedPage>}/>
              <Route path='/map' element={<Mapcontainer/>}/>

              {/* Routes that take Parameters */}
              <Route path='/user/verified' element={<Verifyemail/>}/>

              {/* Property Pages {Only Admin and Owners Should access this page} */}
              <Route path='/property-manager/dashboard' element={<ProtectedPage> <RoleCheck allowedRoles={ROLES.MANAGERS}> <OwnerDashboard/> </RoleCheck></ProtectedPage>}/>
              <Route path='/property-manager/upload' element={<ProtectedPage> <RoleCheck allowedRoles={ROLES.MANAGERS}> <Uploadproperty/> </RoleCheck> </ProtectedPage>}/>
              <Route path='/property-manager/listings/:id' element={<ProtectedPage> <RoleCheck allowedRoles={ROLES.MANAGERS}> <Listproperty/> </RoleCheck></ProtectedPage>}/>
              
              
              {/* Footer Links */}
              <Route path='/test' element={<Testupload/>}/>


              {/* Error 404 Page */}
              <Route path='*' element={<Errorpage/>}/>
              <Route path='/unauthorized' element={<Unauthorized/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}


export default App
