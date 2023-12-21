import React from 'react'

const OwnerCard = ({ownerdetails}) => {
    console.log("what is the ownerdetails: ", ownerdetails);
    if (!ownerdetails) {
        return null; // or return a loading spinner, or some placeholder content
    }
  return (
    <div>
        <div className="max-w-full w-full z-10">
        <div className="flex flex-col">
            <div className="bg-white border border-white py-4">
            <div className="flex-none sm:flex">
                <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="aji" className=" w-32 h-32 object-cover rounded-2xl" />
                </div>
                <div className="flex-auto sm:ml-5 justify-evenly">
                <div className="flex items-center justify-between sm:mt-2">
                    <div className="flex items-center">
                    <div className="flex flex-col">
                        <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">{ownerdetails.first_name} {ownerdetails.last_name}</div>
                        <div className="flex-auto text-gray-500 my-1">
                        <span className="mr-3 ">{ownerdetails.role}</span><span className="mr-3 border-r border-gray-200  max-h-0" /><span>{ownerdetails.email}</span>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="flex pt-2  text-sm text-gray-500">
                    <div className="flex-1 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
                        </path>
                    </svg>
                    <p className>{ownerdetails.property_count} Properties Listed</p>
                    </div>
                    <div className="flex-1 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    <p className>{ownerdetails.average_rating}</p>
                    </div>
                   
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OwnerCard