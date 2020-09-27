import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opt) {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const response = await fetch(url, opt);
        if (!response.ok) {
          setErr(response.statusText);
          throw new Error(response.statusText);
        }
        const responseData = await response.json();
        setData(responseData.status);
      } catch (e) {
        console.error(e);
        setErr(e.message);
      } finally {
        setLoad(false);
      }
    }
    fetchData()
  }, [opt, url]);

  return [data, load, err]
}