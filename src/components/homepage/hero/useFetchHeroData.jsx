import { useState, useEffect } from "react";

export const useFetchHeroData = () => {
    const apiKey = import.meta.env.VITE_API_KEY

    const [heroData, setHeroData] = useState([]);

    useEffect(() => {
        const fetchHeroData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiKey}`
                }
            };

            try {
                const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?language=en-US`, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie videos');
                }
                const data = await response.json();
                setHeroData(data.results);
            } catch (error) {
                console.error('Error fetching movie videos:', error);
            } 
        };

        fetchHeroData();
    }, []);

    return {heroData}; 

}