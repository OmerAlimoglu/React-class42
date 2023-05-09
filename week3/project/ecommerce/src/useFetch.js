// I used this site (`https://dev.to/techcheck/custom-react-hook-usefetch-eid`) to create a custom hook in order to fetch API data
// but I got errors and managed to fix it adding cleanup function
//that cancels the request if the component is unmounted.. (thanks chatGPT :) )
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cancelToken, setCancelToken] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const source = axios.CancelToken.source();
    setCancelToken(source);

    axios
      .get(url, { cancelToken: source.token })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled: Component unmounted");
        } else {
          setError(error);
          setLoading(false);
        }
      });

    return () => {
      if (cancelToken) {
        cancelToken.cancel("Component unmounted");
      }
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

// import { useState, useEffect } from "react";
// import axios from "axios";

// function useFetch(url) {
//   console.log("useFetch called with url: ", url);
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("Fetching data...");
//     setIsLoading("Loading...");
//     setData(null);
//     setError(null);
//     const source = axios.CancelToken.source();
//     axios
//       .get(url, { cancelToken: source.token })
//       .then((res) => {
//         console.log(res.data);
//         setIsLoading(false);
//         setData(res.data.content || res.content);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         setError("An error occurred...");
//         console.log("Error fetching data:", err);
//       });
//     return () => {
//       source.cancel();
//     };
//   }, [url]);

//   return { data, isLoading, error };
// }

// export default useFetch;
