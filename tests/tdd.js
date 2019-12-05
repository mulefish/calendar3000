const {Caller} = require('./caller.js');
const judge = new Caller(); 

function firstDay_decement() { 
    let firstDay = (new Date(year, month)).getDay();


} 

const daysInMonth = (yr, m ) => {
    const days = 32 - new Date(yr, m, 32).getDate();
    return days 
}



function daysInMonth_check2019Dec() { 
    const expect = 31
    const actual = daysInMonth(2019, 12)
    judge.verdict(expect === actual, "days "  + actual)

}


daysInMonth_check2019Dec()