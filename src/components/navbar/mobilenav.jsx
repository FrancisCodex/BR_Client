import React, {useState, useEffect} from 'react'
import '@mdi/font/css/materialdesignicons.css'

const Mobilenav = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(st <= lastScrollTop || st <= 0);
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);


  return (
    <div className={`w-full mx-auto absolute bottom-0 transition-all duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {isVisible && (
        <div className=" bg-white rounded-2xl shadow-xl">
        <div className="px-5 bg-white shadow-lg rounded-2xl bottom-0">
            <div className="flex flex-row space-x-3 items-center justify-between">
            {/* Item #1 */}
            <div className="flex group">
                <a href="/" className="py-1 px-3 text-gray-400 hover:text-yellow-500">
                <span className="flex flex-col items-center">
                    {/* Icon */}
                    <i className="mdi mdi-home-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                            transition-color duration-200" />
                    {/* Text */}
                    <span className="text-xs mb-2 transition-all duration-200">
                    Home
                    </span>
                    {/* Focus Dot */}
                    <span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                            transition-all duration-150 delay-100" />
                </span>
                </a>
            </div>
            {/* Item #2 */}
            <div className="flex group">
                <a href="/" className=" px-3 text-gray-400 hover:text-yellow-500">
                <span className="flex flex-col items-center">
                    {/* Icon */}
                    <i className="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                            transition-color duration-200" />
                    {/* Text */}
                    <span className="text-xs mb-2 transition-all duration-200">
                    Explore
                    </span>
                    {/* Focus Dot */}
                    <span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                            transition-all duration-150 delay-100" />
                </span>
                </a>
            </div>
            {/* Item #3 Active */}
            <div className="flex group">
                <a href="/listings" className=" px-3 group-hover:text-green-800">
                <span className="flex flex-col items-center">
                    {/* Icon */}
                    <i className="mdi mdi-layers-outline mdi-24px mx-1 text-gray-700 group-hover:text-gray-700
                                            transition-color duration-200" />
                    {/* Text */}
                    <span className="text-xs mb-2 transition-all duration-200">
                    Listings
                    </span>
                    {/* Focus Dot */}
                    <span className="h-1 w-5 rounded-full group-hover:bg-yellow-500
                                            hover:h-3 hover:w-3 transition-all duration-150 delay-100" />
                </span>
                </a>
            </div>
            {/* Item #5 */}
            <div className="flex group">
                <a href="/user/profile" className=" px-3 text-gray-400 hover:text-yellow-500">
                <span className="flex flex-col items-center">
                    {/* Icon */}
                    <i className="mdi mdi-account-circle-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                            transition-color duration-200" />
                    {/* Text */}
                    <span className="text-xs mb-2 transition-all duration-200">
                    Account
                    </span>
                    {/* Focus Dot */}
                    <span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                            transition-all duration-150 delay-100" />
                </span>
                </a>
            </div>
            </div>
        </div>
        </div>
          )}
    </div>
  )
}

export default Mobilenav