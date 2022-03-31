import { createContext, useReducer } from "react";
import { initialState, reducer } from "./Reducer";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteButton=()=>{
      
  }
  
  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};
