import { useState, useEffect } from 'react';

const useCustomHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data or perform any side effects here
    // For example, you can make an API call to fetch data
    // and update the state with the response
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Clean up any resources or subscriptions here
    return () => {
      // For example, you can cancel any pending API requests
      // or unsubscribe from event listeners
    };
  }, []);

  return data;
};

export default useCustomHook;
