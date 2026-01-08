import React from "react";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  loading: true,
  login: (value) => {
    console.log(`login ${value} with AppAuth`);
  },
  logout: () => {},
});
