import React, {useState, useEffect, useContext} from 'react'
import logo from '../../assets/BoardRoomLogo.svg'
import notextlogo from '../../assets/BoardRoom_Logo_notext.svg'
import { AuthContext } from '../authentication/AuthProvider'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import '../../styles/navbar.css'
import Cookies from 'js-cookie'

export default function Navbar() {
    const authContext = useContext(AuthContext);
    const isAuthenticated = useContext(AuthContext).isAuthenticated;
    const { logout } = useContext(AuthContext);

    const[roleAuthenticated, setRole] = useState(false);
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [authenticating, setAuthenticating] = useState(true);
    
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if(token){
            const checkRole = jwtDecode(token).role;
            console.log("what is the user role: ", checkRole);
            if(checkRole === 'owner' || checkRole === 'admin'){
                setRole(true);
            }else{
                setRole(false);
            }
        }
    }, [authContext]);

    console.log("What is the setRole: ", roleAuthenticated);
        
    

    const toggleDropdownMenu = () => {
      setIsDropdownMenuOpen(!isDropdownMenuOpen);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    console.log("isAuthenticated?: ", isAuthenticated);
  
    const navbarClass = isScrolled ? 'navbar scrolled' : 'navbar';

  return (
    <div>
        {/* component */}
        <nav className={`navbar top-0 fixed w-full flex justify-between items-center mx-auto px-8 h-20 ${navbarClass} backdrop-filter backdrop-blur-[4px] bg-white/20`}>
        {/* logo */}
        <div className="inline-flex">
            
            <a className="_o6689fn" href="/"><div className="hidden md:block">
            <img src={logo} alt="BoardRoom Logo" className=' block' width={150} height={32} style={{display: 'block'}}/>
            </div>
            <div className="block md:hidden">
                <img src={notextlogo} alt="BoardRoom Logo Hidden" width={100} height={32} className='inline-flex'/>
            </div>
            </a>
        </div>
        {/* end logo */}

        {/* The Catalog */}
        {isAuthenticated ? (
            <>
            <div className="justify-between hidden md:block">
            <div className=''>
                <ul className='flex gap-5'>
                    <a href="/"><li>Home</li></a>
                    <a href="/listings"><li>Listing</li></a>
                    <a href="/user/profile"><li>Profile</li></a>
                </ul>
            </div>
        </div>
        </>
        ):(
        <>
        {/* Empty HTML Display none when the user is not authenticated*/}
        </>
        )
        }
        
        {/* login */}
        <div className="flex-initial">
            <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">

                { isAuthenticated ? (
                <>
                    { roleAuthenticated ? (
                        <>
                        <a className="inline-block py-1 px-2 hover:bg-gray-200 rounded-full colored" href="/manager/dashboard">
                        <div className="flex items-center relative cursor-pointer whitespace-nowrap text-sm">Manage Properties</div>
                        </a>
                        </>
                    ) : (
                        <>
                        <a className="inline-block py-1 px-2 hover:bg-gray-200 rounded-full colored" href="/manager/register">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">List Property</div>
                        </a>
                        </>
                    )}
                
                </>
                ) : (<>
                <a className="inline-block py-1 px-2 hover:bg-gray-200 rounded-full colored" href="/manager/register">
                    <div className="flex items-center relative cursor-pointer whitespace-nowrap">List Property</div>
                </a>
                </>
                )}
                <div className="block relative">
                <button type="button" className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative">
                    <div className="flex items-center h-5">
                    <div className="_xpkakx">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'currentcolor'}}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" /></svg>
                    </div>
                    </div>
                </button>
                </div>
            </div>
            {/* Dropdown Menu */}
            <div className="block relative">
            <button
                type="button"
                className="inline-flex items-center relative px-1 border rounded-full hover:bg-gray-200"
                onClick={toggleDropdownMenu}
            >
                <div className="pl-1">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible'}}>
                    <g fill="none" fillRule="nonzero">
                        <path d="m2 16h28" />
                        <path d="m2 24h28" />
                        <path d="m2 8h28" />
                    </g>
                </svg>
                </div>
                <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'currentcolor'}}>
                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                </svg>
                </div>
            </button>
            {isDropdownMenuOpen && (
    <div className="dropdown-menu absolute top-full right-0 z-10 w-48 rounded-md bg-white shadow-lg">
      <ul className="py-1 text-sm text-gray-700">
        {isAuthenticated ? (
                // Display "Profile" and "Logout" when authenticated
                <>
                    <li>
                    <a href="/user/profile" className="block px-4 py-2 hover-bg-gray-100">Profile</a>
                    </li>
                    {roleAuthenticated && (
                    <>
                        <li>
                        <a href="/manager/dashboard" className="block px-4 py-2 hover-bg-gray-100">Dashboard</a>
                        </li>
                        <li>
                        <a href="/manager/upload" className="block px-4 py-2 hover-bg-gray-100">Upload Property</a>
                        </li>
                    </>
                    )}
                    <li>
                    <a href="/listings" className="block px-4 py-2 hover-bg-gray-100">Listings</a>
                    </li>
                    <li>
                    <a onClick={() => logout()} href="/" className="block px-4 py-2 hover-bg-gray-100">Logout</a>
                    </li>
                </>
                ) : (
                // Display "Register" and "Login" when not authenticated
                <>
                    <li>
                    <a href="/register" className="block px-4 py-2 hover-bg-gray-100">Register</a>
                    </li>
                    <li>
                    <a href="/auth/login" className="block px-4 py-2 hover-bg-gray-100">Login</a>
                    </li>
                </>
                )}
            </ul>
            </div>
        )}
            </div>

            </div>
        </div>
        {/* end login */}
        </nav>

    </div>
  )
}


