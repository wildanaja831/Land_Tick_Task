import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: "",
};

const reducer = (state, action) => {
  const { type, payload} = action;

  switch (type) {
    case "ADMIN_LOGIN_SUCCESS":
      return {
        isLogin: true,
        status: true,
        user: payload,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        isLogin: true,
        status: false,
        user: payload,
      };
    case "LOGOUT":
      return {
        isLogin: false,
        user: "",
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>;
};