import React, { useEffect, useState } from "react";
const url = "https://mdsaymun.github.io/json-data/projects-data/pf1-data.json";
export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(setData, url);
  }, []);
  const fetchData = async (setData, url) => {
    setLoading(true);
    try {
      const req = await fetch(url);
      const res = await req.json();
      if (res) {
        setData(res);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const { blogData } = data;

  return <AppContext.Provider value={{ data, loading, blogData }}>{children}</AppContext.Provider>;
};
export default AppProvider;
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
