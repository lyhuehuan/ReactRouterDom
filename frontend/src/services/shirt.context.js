import React, { useState, createContext, useEffect } from "react";
import {
  getShirts,
  getShirtById,
  createShirt as create,
  updateShirt as update,
  deleteShirt as deleteApi,
} from "./shirt.service";

export const ShirtContext = createContext();

export const ShirtContextProvider = ({ children }) => {
  const [shirts, setShirts] = useState([]);
  const [shirt, setShirt] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadShirts();
  }, []);

  const loadShirts = () => {
    setIsLoading(true);
    getShirts()
      .then((shirts) => {
        setIsLoading(false);
        setShirts(shirts.data);
        console.log(shirts.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const loadShirt = (id) => {
    setIsLoading(true);
    getShirtById(id)
      .then((shirts) => {
        setIsLoading(false);
        setShirt(shirts.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const createShirt = (shirt) => {
    setIsLoading(true);
    create(shirt)
      .then((res) => {
        setIsLoading(false);
        loadShirts();
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const updateShirt = (id, shirt) => {
    setIsLoading(true);
    update(id, shirt)
      .then((res) => {
        setIsLoading(false);
        loadShirts();
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const deleteShirt = (id) => {
    setIsLoading(true);
    deleteApi(id)
      .then((res) => {
        setIsLoading(false);
        loadShirts();
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (keyword.length === 0) {
      loadShirts();
      return;
    }

    if (!keyword.length) {
      return;
    }

    setTimeout(() => {
      searchApi(keyword)
        .then((res) => {
          setShirts(res.data);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, [keyword]);

  return (
    <ShirtContext.Provider
      value={{
        loadShirts,
        loadShirt,
        createShirt,
        update: updateShirt,
        deleteShirt,
        shirts,
        shirt,
        isLoading,
        error,
        keyword,
      }}
    >
      {children}
    </ShirtContext.Provider>
  );
};
