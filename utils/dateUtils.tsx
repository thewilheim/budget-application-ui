import moment from "moment";

export const formatDateToMonthDay = (date: string): string => {
    const allowedDateFormats = ["DD-MM-YYYY, YYYY-DD-MM"]
    return moment(date, allowedDateFormats).format("MMM DD")
}

export const filterByTransactionDate = (query: any, transactions, setTransactions) => {
    setTransactions(transactions.filter(item => moment(item.date, "DD-MM-YYYY").isSame(moment(new Date(),"DD-MM-YYYY"), query)))
  }

  export const filterByTransactionByTimeframe = (transactions, setTransactions, dateOne, dateTwo) => {
    setTransactions(transactions.filter(item => moment(item.date, "DD-MM-YYYY").isBetween(moment(dateOne,"DD-MM-YYYY"), moment(dateTwo,"DD-MM-YYYY"))))
  }