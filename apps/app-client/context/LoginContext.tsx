import React, { createContext, useContext, useState } from "react";

// É preciso criar uma interface para colocar no createContext()
export interface LoginContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Essa praga só da erro em .tsx, em .js funciona de boa, porém, em .tsx ( obviamente porque
 * é tipado eu preciso tipar, por isso a interface acima)
 */
const LoginContext = createContext<LoginContextType | undefined>(undefined);

export default function LoginProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
