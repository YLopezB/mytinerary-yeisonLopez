import { useState, useEffect } from "react";
const url = "http://localhost:8080/api/";

export function useFetch(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(url + path, { cache: "no-store" })
        .then((response) => response.json())
        .then((data) => setData(data.response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return {data, loading, error}
}
