import { useContext } from "react";
import { AppContext } from "./appContext";

export const useAppData = () => {
    const {transactionContext} = useContext(AppContext)
    const [transactions, setTransactions] = transactionContext;

    const saveTransactions = async (transaction) => {
        try {
            const response = await fetch('http://localhost:3000/transactions', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(transaction),
            })
            
            if(response.ok){
                setTransactions(prevState => [...prevState, transaction])
            }
        } catch (error) {
            console.log(error);
        }
    }
    return{
            saveTransactions,
            transactions,
        }
}