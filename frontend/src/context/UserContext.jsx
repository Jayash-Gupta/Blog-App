/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async (e) => {
    console.log(e);
    // e.preventDefault();
    console.log(URL);
    try {
      const res = await axios.get(URL + "/api/auth/refetch", {
        withCredentials: true,
      });
      console.log(res.data);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent the default behavior of the event

  //   // Call getUser to perform the asynchronous operation
  //   getUser();
  // };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form> */}
      {children}
    </UserContext.Provider>
  );
}
