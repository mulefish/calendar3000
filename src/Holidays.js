

const holidays = {
    "2019-01-01": ["2019-01-01","New Year's Day","Federal Holiday"],
    "2019-01-19": ["2019-01-19","Robert E. Lee's Birthday","State holiday"],
    "2019-01-21": ["2019-01-21","Martin Luther King Jr. Day","Federal Holiday"],
    "2019-02-12": ["2019-02-12","Lincoln's Birthday","Local observance"],
    "2019-02-18": ["2019-02-18","Presidents' Day","Federal Holiday"],
    "2019-03-05": ["2019-03-05","Shrove Tuesday/Mardi Gras","State holiday"],
    "2019-03-10": ["2019-03-10","Daylight Saving Time starts","Clock change/Daylight Saving Time"],
    "2019-04-02": ["2019-04-02","Pascua Florida Day","Local observance"],
    "2019-05-27": ["2019-05-27","Memorial Day","Federal Holiday"],
    "2019-06-03": ["2019-06-03","Jefferson Davis' Birthday","Local observance"],
    "2019-07-04": ["2019-07-04","Independence Day","Federal Holiday"],
    "2019-09-02": ["2019-09-02","Labor Day","Federal Holiday"],
    "2019-10-14": ["2019-10-14","Columbus Day","Federal Holiday"],
    "2019-11-03": ["2019-11-03","Daylight Saving Time ends","Clock change/Daylight Saving Time"],
    "2019-11-11": ["2019-11-11","Veterans Day","Federal Holiday"],
    "2019-11-28": ["2019-11-28","Thanksgiving Day","Federal Holiday"],
    "2019-12-25": ["2019-12-25","Christmas Day","Federal Holiday"],
    "2020-01-01": ["2020-01-01","New Year's Day","Federal Holiday"],
    "2020-01-19": ["2020-01-19","Robert E. Lee's Birthday","State holiday"],
    "2020-01-20": ["2020-01-20","Martin Luther King Jr. Day","Federal Holiday"],
    "2020-02-12": ["2020-02-12","Lincoln's Birthday","Local observance"],
    "2020-02-17": ["2020-02-17","Presidents' Day","Federal Holiday"],
    "2020-02-25": ["2020-02-25","Shrove Tuesday/Mardi Gras","State holiday"],
    "2020-03-08": ["2020-03-08","Daylight Saving Time starts","Clock change/Daylight Saving Time"],
    "2020-04-02": ["2020-04-02","Pascua Florida Day","Local observance"],
    "2020-05-25": ["2020-05-25","Memorial Day","Federal Holiday"],
    "2020-06-03": ["2020-06-03","Jefferson Davis' Birthday","Local observance"],
    "2020-07-03": ["2020-07-03","Independence Day observed","Federal Holiday"],
    "2020-07-04": ["2020-07-04","Independence Day","Federal Holiday"],
    "2020-09-07": ["2020-09-07","Labor Day","Federal Holiday"],
    "2020-10-12": ["2020-10-12","Columbus Day","Local observance"],
    "2020-11-01": ["2020-11-01","Daylight Saving Time ends","Clock change/Daylight Saving Time"],
    "2020-11-11": ["2020-11-11","Veterans Day","Federal Holiday"],
    "2020-11-26": ["2020-11-26","Thanksgiving Day","Federal Holiday"],
    "2020-12-25": ["2020-12-25","Christmas Day","Federal Holiday"],
    "2021-01-01": ["2021-01-01","New Year's Day","Federal Holiday"],
    "2021-01-18": ["2021-01-18","Martin Luther King Jr. Day","Federal Holiday"],
    "2021-01-19": ["2021-01-19","Robert E. Lee's Birthday","State holiday"],
    "2021-02-12": ["2021-02-12","Lincoln's Birthday","Local observance"],
    "2021-02-15": ["2021-02-15","Presidents' Day","Federal Holiday"],
    "2021-02-16": ["2021-02-16","Shrove Tuesday/Mardi Gras","State holiday"],
    "2021-03-14": ["2021-03-14","Daylight Saving Time starts","Clock change/Daylight Saving Time"],
    "2021-04-02": ["2021-04-02","Pascua Florida Day","Local observance"],
    "2021-04-26": ["2021-04-26","Confederate Heroes' Day","Local observance"],
    "2021-05-01": ["2021-05-01","Lei Day","Local observance"],
    "2021-05-31": ["2021-05-31","Memorial Day","Federal Holiday"],
    "2021-06-03": ["2021-06-03","Jefferson Davis' Birthday","Local observance"],
    "2021-07-04": ["2021-07-04","Independence Day","Federal Holiday"],
    "2021-07-05": ["2021-07-05","Independence Day observed","Federal Holiday"],
    "2021-09-06": ["2021-09-06","Labor Day","Federal Holiday"],
    "2021-11-07": ["2021-11-07","Daylight Saving Time ends","Clock change/Daylight Saving Time"],
    "2021-11-11": ["2021-11-11","Veterans Day","Federal Holiday"],
    "2021-11-25": ["2021-11-25","Thanksgiving Day","Federal Holiday"],
    "2021-12-24": ["2021-12-24","Christmas Day observed","Federal Holiday"],
    "2021-12-25": ["2021-12-25","Christmas Day","Federal Holiday"],
    "2021-12-31": ["2021-12-31","New Year's Day observed","Federal Holiday"]
  }

function getHoliday(year, month, day ) { 
    let m = "" + month 
    let d = "" + day 
    if ( month < 10 ) {
        m = "0" + month
    }
    if ( day < 10 ) {
        d = "0" + day
    }
    const yyyymmdd = year + "-" + m + "-" + d
    const ary = holidays[yyyymmdd]

    if ( ary !== undefined ) {
        //console.log(ary[0] + " " + ary[1] + " " + ary[2] )
        return ary[1] 
    }
}

export default getHoliday;
