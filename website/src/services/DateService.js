class DateService {

    static formatDate(date) {
        console.log("Date", date);
        let dateObject = new Date(date);
    
    const day = dateObject.getUTCDate();
    const month = dateObject.getUTCMonth();
    const year = dateObject.getUTCFullYear();
    return day + "-" + month + "-" + year;
    }
}

export default DateService;