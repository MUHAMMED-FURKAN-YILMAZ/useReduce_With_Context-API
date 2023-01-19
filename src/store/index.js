import { useContext, useReducer } from "react";
import { createContext } from "react";
import { counterInitialState } from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";

// Boş bir merkezi State oluşturduk
const StoreContex = createContext();

// Componentlerde merkezi state'e erişimi kolaylaşlaştırmak için kendi hook'umuzu yazdık
export const useStore = () => useContext(StoreContex);

export const StoreProvider = ({ children }) => {
  // useReducer hook'una reducer ve initialState parametre olarak verilir ...
  // useReducer fonksiyonu ise geriye setter ve getter'ları döner
  //       getter        setter
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    counterInitialState
  );

  return (
    <StoreContex.Provider value={{ counterState, dispatchCounter }}>
      {children}
    </StoreContex.Provider>
  );
};
