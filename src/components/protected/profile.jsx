import React, { useContext, useEffect} from "react";
import {AuthContext, ProtectedPage} from "../authentication/AuthProvider"; // Import the AuthContext
import Navbar from "../navbar/navbar";
import Footer from "../footer";

const Profile = () => {
  const user = useContext(AuthContext).user;
  console.log("What is this authentication part?: ", user);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const formattedDate = new Date(user.accountCreatedAt).toLocaleDateString();
  return (
    <ProtectedPage>
      <Navbar/>
      <div className="pt-20">
      <div className="container mx-auto my-5 p-5">
    <div className="md:flex no-wrap md:-mx-2 ">
      {/* Left Side */}
      <div className="w-full md:w-3/12 md:mx-2">
        {/* Profile Card */}
        <div className="bg-white p-3 border-t-4 border-green-400">
          <div className="image overflow-hidden">
            <img className="h-50 w-50 rounded mx-auto" src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile image" />
          </div>
          <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user.firstName} {user.lastName}</h1>
          <h3 className="text-gray-600 font-lg font-semibold leading-6">{capitalizeFirstLetter(user.role)}</h3>
          <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
          <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
          <li className="flex items-center py-3">
            <span>Email Verified</span>
            <span className="ml-auto">
              {user.emailVerified ? (
                <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Verified</span>
              ) : (
                <span className="bg-red-500 py-1 px-2 rounded text-white text-sm">Not Verified</span>
              )}
            </span>
          </li>
            <li className="flex items-center py-3">
              <span>Member since</span>
              <span className="ml-auto">{formattedDate}</span>
            </li>
          </ul>
        </div>
        {/* End of profile card */}
        <div className="my-4" />
      </div>
      {/* Right Side */}
      <div className="w-full md:w-9/12 mx-2 h-64">
        {/* Profile tab */}
        {/* About Section */}
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span clas="text-green-500">
              <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <span className="tracking-wide">About</span>
          </div>
          <div className="text-gray-700">
            <div className="grid md:grid-cols-2 text-sm break-words">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold ">Full Name</div>
                <div className="px-4 py-2">{user.firstName} {user.lastName}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Gender</div>
                <div className="px-4 py-2">Male</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Contact No.</div>
                <div className="px-4 py-2">+11 998001001</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Current Address</div>
                <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                  <a className="text-blue-800" href="mailto:jane@example.com">{user.email}</a>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Birthday</div>
                <div className="px-4 py-2">Feb 06, 1998</div>
              </div>
            </div>
          </div>
        </div>
        {/* End of about section */}
        <div className="my-4" />
      </div>
      </div>
    </div>
    <div className="pt-14">
      <Footer/>         
    </div>
      
      </div>
    </ProtectedPage>
  );
};

export default Profile;
