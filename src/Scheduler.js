import React from 'react';

import Row from './Row';

class Scheduler extends React.Component {


  constructor(props) {
    super(props);
    const dayMap = {
      Sun:0,
      Mon:1,
      Tue:2,
      Wed:3,
      Thu:4,
      Fri:5,
      Sat:6
    }
    const now = new Date() 
    this.activeMonth = now.getMonth()
    this.activeYear = now.getYear() + 1900
    


    this.state = {

    }

  } 
  setDate() { 
    const firstDay = new Date(this.activeYear, this.activeMonth, 1);
    const lastDay = new Date(this.activeYear, this.activeMonth + 1, 0);
    const dayNumber = firstDay.getDay() // this will be a number like 6 for 'saturday' or '1' for 'monday'
    const count = lastDay.getDate() // this will be a number like 28 for 'number of days in febuary' 
    let populateDays = 0
    let cellsCount = 0

    let i = 0  
    let j = 0
    let rows = [] 
    let day = 0 
    while ( j <  count ) {

      if ( i % 7 == 0 ) {
        rows.push([])
        day = 0
      }


      i++
      if ( i >= dayNumber) {
        j++
        rows[rows.length - 1][day] = j
      } else {
        rows[rows.length - 1][day] = "-"



      }
      day++
 
      console.log( "i " + i + "   j " + j )




    }


rows.forEach((sevenDays, x )=>{
  console.log( x + "   " + JSON.stringify( sevenDays ))
})
  }

  changeMonth = (event) => {
    this.activeMonth =  parseInt(event.target.value) 
    this.setDate() 
  };

  changeYear = (event) => {
    this.activeYear =  parseInt(event.target.value)
    this.setDate() 
  };

  render() { 

    return (
      <div>

      <hr></hr>
      <select onChange={this.changeMonth}>
        <option value='0'>January</option>
        <option value='1'>February</option>
        <option value='2'>March</option>
        <option value='3'>April</option>
        <option value='4'>May</option>
        <option value='5'>June</option>
        <option value='6'>July</option>
        <option value='7'>August</option>
        <option value='8'>September</option>
        <option value='9'>October</option>
        <option value='10'>November</option>
        <option value='11' selected>December</option>
      </select>

      <select onChange={this.changeYear}>
        <option value='2019' selected>2019</option>
        <option value='2020'>2020</option>
        <option value='2021' >2021</option>
      </select>
     </div>
    );
  }
} 
export default Scheduler;