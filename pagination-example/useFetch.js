import { useState, useEffect } from "react";
import paginate from "./paginate";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data, loading };
};
export default useFetch;
