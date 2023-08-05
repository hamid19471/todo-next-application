import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => {
        if (isMounted) {
          setLoading(false);
          setData(data);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setLoading(false);
          setError(error);
        }
      })
      .finally(() => isMounted && setLoading(false));
    return () => (isMounted = false);
  }, [url]);
  return { loading, data, error };
};

export default useFetch;
