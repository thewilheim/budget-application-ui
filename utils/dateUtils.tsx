import moment from "moment";

export const formatDateToMonthDay = (date: string): string => {
    const allowedDateFormats = ["MM-DD-YYYY", "DD-MM-YYYY"]
    return moment(date, allowedDateFormats).format("MMM DD")
}