import {useState, useEffect} from 'react';

export default function useJsonFetch(url) {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const response = await fetch(url);
        if (!response.ok) {
          setErr(response.statusText);
          throw new Error(response.statusText);
        }
        const responseData = await response.json();
        setData(responseData.status);
      } catch (e) {
        console.error(e);
      } finally {
        setLoad(false);
      }
    }
    fetchData()
  }, [url]);

  return [data, load, err]
}