function getHoliday(date) {
    var d = new Date(date);
    var month = d.getMonth()+1;
    var day = d.getDate();
    //fixed dates
    if (month === 1){
        if (day === 1)
        {
            return "Nyårsdagen";
        }
        if (day === 5) {
            return "Trettondagsafton"
        }
    } //end Jan
    
}