import React from "react";
import { useState } from "react";
const Context = React.createContext();
  const ContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [user,setUser]=useState([])
  const [location, setLocation]=useState(null)
  const [loading,setLoading]=useState(false)
  return (
    <Context.Provider value={{ data, setData,user,setUser, location, setLocation, loading,setLoading}}>{children}</Context.Provider>
  );
};


export {ContextProvider,Context}
