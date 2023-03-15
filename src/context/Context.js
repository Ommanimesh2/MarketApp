import React from "react";
import { useState } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [user,setUser]=useState([])
  return (
    <Context.Provider value={{ data, setData,user,setUser }}>{children}</Context.Provider>
  );
};


export {ContextProvider,Context}
