

//let monthArr = ['January', 'February', 'March','April', 'May', 'June', 'July','August', 'September', 'October','November', 'December'];


const JANUARY = 0
const FEBUARY = 1
const MARCH = 2
const APRIL = 3
const MAY = 5
const JUNE =  6
const JULY = 7
const AUGUST = 8
const SEPTEMBER = 9
const OCTOBER = 10
const NOVEMBER = 11
const DECEMBER = 12


let dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 
// The Doomsday dates for each month
const doomsdayArrayLeapYear = [4,1,7,4,2,6,4,1,5,3,7,5];
const doomsdayArrayNotLeapYear = [3,7,7,4,2,6,4,1,5,3,7,5];

//let monthSelect;
//let daySelect;
let yearSelect;
//let calcBut;
//let resultsBox;
 

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


    let resultStr = "" 
    function superzoom(yearSelect, month, day){
    
        // divide the last 2 digits of year by 12 : ";
        const year2Digits = getLast2DigitsOfYear(yearSelect)

        // 19 / 12 = 1 OR 
        const calc1 = Math.floor(year2Digits/12);
        resultStr += year2Digits + " / 12 = " + calc1 + "\n";
        resultStr += "2. Get the difference between the years last 2 digits and the previous result * 12 : ";
 
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
 
        //    resultStr = resultStr + "4. Add all results plus the anchor day value : " + calc1 + " + " + calc2 + " + " + calc3 + " + " + anchorNum + " = " + calc4 + "\n";
 
        // Take modulus of 7 from previous result to get a value between
        // 0 and 6 representing the days of a week (The Doomsday)
        const calc5 = calc4 % 7;
 
        // resultStr = resultStr + "5. Take the modulus of 7 from the previous result to get Doomsday : " + calc4 + " % 7 = " + calc5 + " (" + dayArr[calc5] + ")" + "\n"; 
 
    // // Check if it is a leap year
    // // Leap years are divisible by 4 unless it is divisible by
    // // 100 and not divisible by 400
    // let year = yearSelect;
    // let leapYear = (year % 4 == 0) ? true : false;
    // if((year % 100 == 0) && (year % 400 != 0)) leapYear = false;
    // resultStr = resultStr + "6. Is it a leap year? " + leapYear.toString() + "\n";
        const leapYear = isLeapYear(yearSelect)
    


    // Find the day by adding or subtracting the Doomsday
    // calc5 is the index for the Doomsday in dayArr
    // Get the month index
    //let day = daySelect;

    //console.log("daySelect: " + daySelect + " | " + day)


    //let monthSelected = monthSelect.toString();
    //console.log("monthSelect: " + monthSelected + " | " + monthSelected)


    //let monthIndex = monthArr.indexOf(monthSelected);

    let dayIndex;
    let doomsdayDay;
 
    resultStr = resultStr + "7. Add or Subtract previous result from the Doomsday number to find this dates day : " + calc5;
 
   
    // Get the Doomsday day which changes every month
    if(leapYear){
    
        doomsdayDay = doomsdayArrayLeapYear[month];
    } else {
        doomsdayDay = doomsdayArrayNotLeapYear[month];
    }
 
    // Example Jan 1, 2001
    // Day (1) Doomsday Day (3) calc5 : Day Code (3/Wed)
    // dayIndex = calc5 - (3 - 1) = 1 / Monday
    if(day < doomsdayDay){
        dayIndex = calc5 - (doomsdayDay - day);
        resultStr = resultStr + " - (" + doomsdayDay + " - " + day + ")";
    } else if(day > doomsdayDay){
 
        // Example Jan 4, 2001
        // Day (4) Doomsday Day (3) calc5 : Day Code (3/Wed)
        // dayIndex = calc5 + (4 - 3) = 4 / Thursday
        dayIndex = calc5 + (day - doomsdayDay);
 
        // If dayIndex is greater than 7 convert its date to
        // the 0 through 7 format used by the dayArr
        if(dayIndex >= 7){
            dayIndex = dayIndex % 7;
            resultStr = resultStr + " + (" + day + " - " + doomsdayDay + ") % 7";
        } else {
            resultStr = resultStr + " + (" + day + " - " + doomsdayDay + ")";
        }
    } else {
        dayIndex = calc5;
    }
 
    // If negative number flip to the end of the week and count down from there
    if(dayIndex < 0) dayIndex = 7 + dayIndex;
    
    resultStr = resultStr + " = " + dayIndex + "\n";
    resultStr += "!!! " + getMonthName(month) + " " + day + " " + yearSelect + " was a " + dayArr[dayIndex];
 //   resultsBox.innerHTML = resultStr;
 console.log( resultStr )
}



//superzoom(2019, 'January', 1)
//superzoom(2019, 'December', 5)

superzoom(2019, JANUARY, 1)
superzoom(2019, DECEMBER, 5)
