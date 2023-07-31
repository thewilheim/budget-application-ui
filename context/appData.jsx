import { useContext } from "react";
import { AppContext } from "./appContext";

export const useAppData = () => {
    const {transactionsContext, categoriesContext} = useContext(AppContext)

    const [transactions, setTransactions] = transactionsContext;
    const [categories, setCategories] = categoriesContext;

    const saveTransactions = (transaction) => {
        if(!transaction){
            console.error("Error: no transaction passed");
        }
        setTransactions(prevState => [...prevState, transaction])
    }
    return{
            saveTransactions,
            setCategories,
            transactions,
            categories
        }
}