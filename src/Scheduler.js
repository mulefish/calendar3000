import React from 'react';

import Row from './Row';
import RowHeader from './RowHeader';
//import { WSAEINVALIDPROVIDER } from 'constants';

class Scheduler extends React.Component {


  constructor(props) {
    super(props);
    const now = new Date() 
    this.activeMonth = now.getMonth()
    this.activeYear = now.getYear() + 1900
    this.cellWidth = ( window.innerWidth - 400 )  / 7
    this.cellHeight = ( window.innerHeight * 0.61 ) / 5


    this.state = {
      rows:[]
    }


  } 

  componentDidMount() { 
    this.setDate()
  }


  setDate() { 
    const firstDay = new Date(this.activeYear, this.activeMonth, 1);
    const lastDay = new Date(this.activeYear, this.activeMonth + 1, 0);
    const dayNumber = firstDay.getDay() // this will be a number like 6 for 'saturday' or '1' for 'monday'
    const count = lastDay.getDate() // this will be a number like 28 for 'number of days in febuary' 

    let i = 0  // for the ary of arries
    let j = 0  // for the calendar 
    let rows = [] // the calendar 
    let day = 0 // counter relative to the _week_ 
    while ( j <  count ) {

      if ( i % 7 === 0 ) {
        rows.push([])
        day = 0
      }
      i++
      if ( i >= dayNumber) {
        j++
        rows[rows.length - 1][day] = j
      } else {
        rows[rows.length - 1][day] = ""
      }
      day++
    }

    let remainder = 7 - day
    for ( let leftOverDay = day; leftOverDay < ( remainder + day ) ; leftOverDay++ ) { 
      rows[rows.length - 1][leftOverDay] = ""
    }

    this.setState({rows:rows})

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

    let ary = [] 



    this.state.rows.forEach((r, i ) => { 
      const key = "r" + i 
      ary.push( <Row key={key}  activeYear={this.activeYear} activeMonth={this.activeMonth} height={this.cellHeight}  width={this.cellWidth} data={r} />)
    })





    return (
      <div>

      <table>
        <tbody>
        <RowHeader height={this.cellHeight} width={this.cellWidth} data={["Sun", "Mon", "Tue","Wed","Thu","Fri","Sat"]} />
        {ary}
        </tbody>
      </table>


      <hr></hr>
      <select onChange={this.changeMonth} defaultValue={this.activeMonth}>
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
        <option value='11' >December</option>
      </select>

      <select onChange={this.changeYear}  defaultValue={this.activeYear}>
        <option value='2019' >2019</option>
        <option value='2020'>2020</option>
        <option value='2021' >2021</option>
      </select>
     </div>
    );
  }
} 
export default Scheduler;