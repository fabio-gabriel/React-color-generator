import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginProvider(props) {
  let [user, setUser] = useState({ loggedIn: false, name: "Please Log In" });

  let state = {
    user,
  };

  return (
    <LoginContext.Provider
      value={{
        user: state.user,
        setUserLogin: () =>
          setUser({ loggedIn: !state.user.loggedIn, name: "Fulano of Tal" }),
        setUserLogout: () =>
          setUser({ loggedIn: !state.user.loggedIn, name: "Please Log In" }),
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
