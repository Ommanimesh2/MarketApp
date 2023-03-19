import React from "react";
import { useState } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [addjob, setAddjob] = useState("");
  const [addmachine, setAddmachine] = useState("");
  const [addStall, setAddstall] = useState("");
  const [user,setUser]=useState([])
  const [location, setLocation]=useState(null)
  return (
    <Context.Provider value={{ data, setData,user,setUser, location, setLocation }}>{children}</Context.Provider>
  );
};


export {ContextProvider,Context}
