import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const CategoryContext = createContext();
const CategoriesContext = ({ children }) => {
  const [datacat, setData] = useState(null);
  const [loadingcat, setLoading] = useState(true);
  const [errorcat, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:1337/api/categories?populate=*"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <CategoryContext.Provider value={{ datacat, loadingcat, errorcat }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoriesContext, CategoryContext };
