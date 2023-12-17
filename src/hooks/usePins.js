import { useState, useEffect } from 'react';
import instance from './useRefreshToken';
const usePins = () => {
    const [pins, setPins] = useState([]);

    const fetchPins = async () => {
        try {
            const response = await instance.get('/api/pins');
            setPins(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPins();
    }, []);

    return pins;
};

export default usePins;
