function isoDate(oldDate) {
        const year = oldDate.getFullYear();
        let month = oldDate.getMonth()+1;
        let dt = oldDate.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return year+'-' + month + '-'+ dt;
}

export default isoDate;