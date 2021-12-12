import {useState, useEffect} from 'react';

const useFetch = (callback, url) => { //커스텀 훅스
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const initialData = await response.json();
    callback(initialData)
    setLoading(false);
  }

  useEffect( () => {
    fetchInitialData();
  }, []) //null 배열을 넣으면, 한번만 실행

  return loading;
}

export default useFetch;