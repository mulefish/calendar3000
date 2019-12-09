
const JANUARY = 0
const FEBUARY = 1
const MARCH = 2
const APRIL = 3
const MAY = 4
const JUNE =  5
const JULY = 6
const AUGUST = 7
const SEPTEMBER = 8
const OCTOBER = 9
const NOVEMBER = 10
const DECEMBER = 11

// let dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//const days = ['SUNDAY', MONDAY] 
// The Doomsday dates for each month
const doomsdayArrayLeapYear = [4,1,7,4,2,6,4,1,5,3,7,5];
const doomsdayArrayNotLeapYear = [3,7,7,4,2,6,4,1,5,3,7,5];


const getDayName = ( day ) => {
    const lookup = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY"
    ]
    return lookup[day]
}

const getMonthName = (month) => { 
        const lookup = [  
            "padding",     
            "JANUARY",
            "FEBUARY",
            "MARCH",
            "APRIL",
            "MAY",
            "JUNE",
            "JULY",
            "AUGUST",
            "SEPTEMBER",
            "OCTOBER",
            "NOVEMBER",
            "DECEMBER"
        ]
        return lookup[month]
    }

    const getLast2DigitsOfYear = ( year ) => {
        // Get last 2 digits of the year
        const year2Digits = year.toString().substr(-2);
        return year2Digits
    }

    const getAnchorDayOfYear = ( year ) => {
        // Get 1st digit of the year if it is 1 the anchor day is 
        // Wednesday (3) and if 2 the anchor day is Tuesday (2)
        const firstDigitYear = String(year).toString().charAt(0);        
        const anchorNum = (firstDigitYear == 1) ? 3 : 2;
        return anchorNum
    }

    const isLeapYear = (year) => { 
        // Check if it is a leap year
        // Leap years are divisible by 4 unless it is divisible by
        // 100 and not divisible by 400
        let leapYear = (year % 4 == 0) ? true : false;
        if((year % 100 == 0) && (year % 400 != 0)) leapYear = false;
        return leapYear
    }


    const getDoomsdayForYear = (year, month) => {
        // Get the Doomsday day which changes every month
        const leapYear = isLeapYear(year)
        let doomsdayDay
        if(leapYear){
            doomsdayDay = doomsdayArrayLeapYear[month];
        } else {
            doomsdayDay = doomsdayArrayNotLeapYear[month];
        }
        return doomsdayDay
    } 

    //let resultStr = "" 
    function doomsDayAlgo(year, month, day){
    
        // divide the last 2 digits of year by 12 : ";
        const year2Digits = getLast2DigitsOfYear(year)

        // 19 / 12 = 1 OR 
        const calc1 = Math.floor(year2Digits/12);
 
        // Subtract previous calculation * 12 from the year selected
        // to get the difference between the years last 2 digits and the previous result * 12 : ";

        const calc2 = year2Digits - (calc1 * 12);
        //resultStr += " " + year2Digits + " - (" + calc1 + " * 12) = " + calc2 + "\n";
 
        // Divide previous calculation by 4
        const calc3 = Math.floor(calc2 / 4);
 
        //resultStr = resultStr + "3. Divide previous result by 4 : " + calc2 + " / 4 = " + calc3 + "\n";
        // Divide previous result by 4 : " + calc2 + " / 4 = " + calc3 + "\n";
        const anchorNum = getAnchorDayOfYear()


        // Add all results plus the anchor day value
        const calc4 = calc1 + calc2 + calc3 + anchorNum;
 
        // Take modulus of 7 from previous result to get a value between
        // 0 and 6 representing the days of a week (The Doomsday)
        //
        // Find the day by adding or subtracting the Doomsday
        // calc5 is the index for the Doomsday in dayArr
 

        const calc5 = calc4 % 7;
        const leapYear = isLeapYear(year)
    
        const doomsdayDay = getDoomsdayForYear(month)
        if(day < doomsdayDay){
            dayIndex = calc5 - (doomsdayDay - day);
        } else if(day > doomsdayDay) {
            dayIndex = calc5 + (day - doomsdayDay);
 
        // If dayIndex is greater than 7 convert its date to
        // the 0 through 7 format used by the dayArr
        if(dayIndex >= 7){
            dayIndex = dayIndex % 7;
        }
    } else {
        dayIndex = calc5;
    }
 
    // If negative number flip to the end of the week and count down from there
    if(dayIndex < 0) { 
        dayIndex = 7 + dayIndex;
    }
    const resultStr = dayIndex + "  " + getMonthName(month) + " " + day + " " + year + " was a " + getDayName(day) + " and day " + day ;
    console.log( resultStr )
}

//doomsDayAlgo(2001, JANUARY, 1)

/*
class Finch {
    constructor() { 
        console.log("hello ")
    }
}

const getThing = () => { 
    return "kittycat" 
}
function wren() { 
    return "wren " + getThing()
}
export default wren
*/