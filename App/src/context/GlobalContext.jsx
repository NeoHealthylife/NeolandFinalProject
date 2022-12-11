import { createContext, useState } from "react";
const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [interruptor, setInterruptor] = useState(false);
  const [homeContent, setHomeContent] = useState("intro");
  const [isLogged, setIsLogged] = useState(false);
  const [ recipes, setRecipes ] = useState([])

  const value = {
    interruptor,
    setInterruptor,
    homeContent,
    isLogged,
    setIsLogged,
    setHomeContent,
    recipes, 
    setRecipes

  };

 
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export { GlobalContextProvider };
export default GlobalContext;
