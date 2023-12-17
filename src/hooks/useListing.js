import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import instance from './useRefreshToken';


export const useListing = () => {
    const [property, setProperty] = useState(null);
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const scrollContainerRef = useRef(null);
    const [sortOrder, setSortOrder] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = scrollContainerRef.current.scrollTop;
          const isScrollingUp = currentScrollPos < lastScrollPos;
          setIsNavVisible(isScrollingUp);
          setLastScrollPos(currentScrollPos);
        };
    
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
          scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        }
    
        return () => {
          if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', handleScroll);
          }
        };
      }, [lastScrollPos]);
      
    
      // const { keyword, city, type } = useParams(); // Get the search keyword from the URL
    
      const location = useLocation();
      // Parse the query parameters from the location.search string
      const queryParams = new URLSearchParams(location.search); 
      const keyword = queryParams.get('keyword');
      const city = queryParams.get('city');
      const type = queryParams.get('type');
      console.log('Search parameters:', queryParams.get('keyword'), queryParams.get('city'), queryParams.get('type'));
    
      const fetchProperties = async () => {
        try {
          // Modify the URL based on whether any parameter is present
          let url = keyword || city || type
            ? `/api/query?keyword=${keyword}&city=${city}&type=${type}`
            : '/api/property/listings';
          // Add the sort order to the URL if it's specified
          if (sortOrder) {
            url += `?sort=${sortOrder}`;

            console.log("what is the url: ", url)
          }
          const response = await instance.get(url);
          setProperty(response.data);
        } catch (err) {
          console.error(err);
        }
      };
    
      useEffect(() => {
        fetchProperties();
      }, [keyword, city, type, sortOrder]);
      

      console.log("what is the property: ", property);
    return {
        property,
        isDropdownMenuOpen,
        setIsDropdownMenuOpen,
        isNavVisible,
        setIsNavVisible,
        lastScrollPos,
        setLastScrollPos,
        scrollContainerRef,
        setSortOrder,
        sortOrder,
      };
    };