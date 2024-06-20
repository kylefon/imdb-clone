import { useState, useEffect } from "react";

export const useFetchTrendingDay = () => {
    const apiKey = import.meta.env.VITE_API_KEY

    const [trendingDayData, setTrendingDayData] = useState([]);

    useEffect(() => {
        const feetchTrendingDay = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiKey}`
                }
            };

            try {
                const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US`, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie videos');
                }
                const data = await response.json();
                setTrendingDayData(data.results);
                console.log(trendingDayData);
            } catch (error) {
                console.error('Error fetching movie videos:', error);
            } 
        };

        feetchTrendingDay();
    }, []);

    return {trendingDayData}; 

}