const {Caller} = require('./caller.js');
const judge = new Caller(); 
const getCalendarSeed = require('./logic/CalendarLogic.js')
const setMonthWithParams = () => { 
    const years = [2019, 2020] 
    const predictedDays = [
        [ 31,28,31,30,31,30,31,31,30,31,30,31], // 2019
        [ 31,29,31,30,31,30,31,31,30,31,30,31] // 2020 is a leap year
    ]
    let isOk = true 
    years.forEach((activeYear,i)=>{
        let actual = []
        for ( let activeMonth = 0; activeMonth < 12; activeMonth++ ) { 
            // first day of the month 
            // const firstDay = new Date(activeYear, activeMonth, 1).getDate()
            // last day of the month - if this is correct then the month picking is good 
            const lastDay = new Date(activeYear, activeMonth + 1, 0).getDate()

            actual.push(lastDay)
        }
        if ( JSON.stringify(actual) != JSON.stringify(predictedDays[i])) {
            console.log( activeYear + " FAIL! " + JSON.stringify( actual))
            console.log( activeYear + " _____ " + JSON.stringify( predictedDays[i]))
            isOk = false 
        }
    })
    judge.verdict(isOk, "Months are property picked" )
}



const daysInMonth = (yr, m ) => {
    const days = 32 - new Date(yr, m, 32).getDate();
    return days 
}



function showCalendar(activeMonth, activeYear) {
    const firstDay = new Date(activeYear, activeMonth, 1).getDate()
    const lastDay = new Date(activeYear, activeMonth + 1, 0).getDate()
    let dateCounter = 1;
    let rows = [] 
    for (let i = 0; i < 6; i++) {
        rows.push([])
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                rows[i].push("_")
                // Too early
            } else if (dateCounter > daysInMonth(activeMonth, activeYear)) {
                // Too late
                rows[i].push("_")
                //break;
            } else {
                rows[i].push(dateCounter + "")
                dateCounter++;
            }
        }
    }
    console.log( rows)
    const dateObj = new Date(activeYear, activeMonth, 1)
    console.log("first day: " + firstDay )
    console.log("second day: " + lastDay )
    console.log("date ", dateObj )
}
showCalendar(0, 2019 )
setMonthWithParams() 
