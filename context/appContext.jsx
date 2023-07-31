import { createContext, useEffect } from "react";
import { useState } from "react";

const AppContext = createContext(null);

const AppContextProvider = ({children}) => {
    const [transactions, setTransactions] = useState([])
    const fetchTransactions = async () => {
      const response = await fetch('http://localhost:3000/transactions',{method: 'GET'})
      const data = await response.json()
      setTransactions(data)
    }

    useEffect(() => {
      fetchTransactions()
    },[])
      return(
        <AppContext.Provider value={{transactions, setTransactions}}>
            {children}
        </AppContext.Provider>
      )
} 

export {AppContext, AppContextProvider}