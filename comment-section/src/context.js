import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getComments as commentData,
  createComment,
  deleteComment as deleteCommentApi,
  editComment as editCommentApi,
} from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    commentData().then((data) => setComments(data));
  }, []);
  return (
    <AppContext.Provider
      value={{
        comments,
        setComments,
        createComment,
        deleteCommentApi,
        editCommentApi,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
