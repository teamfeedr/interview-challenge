import { useState, useEffect } from "react";
import axios from "axios";

export const usePost = (url, input) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    const postData = async () => {
      const results = await axios({
        method: 'POST',
        data: {
          'filter': input
        },
        url: url,
        headers: { 'Content-Type': 'application/json' }
      });
      setData(results.data);
      setLoading(false);
    }
    try {
      postData();

    } catch (e) {
      setErrorMsg(e.message);
    }
  }, [input]);

  if (errorMsg) {
    console.log(errorMsg);
  }
  return { loading, errorMsg, data }
};
