import { useEffect,useState } from "react";

export function useFetch(fetchFn, initialValue ) {
       const [isFetching, setIsFetching] = useState(); 
       const [error, setError] = useState()
       const [fetchedData, setFetchingData] = useState(initialValue);
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchingData(data);
      } catch (error) {
        setError({
          message: error.message || 'Failed to fetch user data.',
        });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    error
  };
}
