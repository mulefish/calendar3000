import React  from 'react';

import './App.css';
import Scheduler from './Scheduler';

class App extends React.Component {


  constructor(props) {
    super(props);

  }


  render() { 
    return (
      <div className="App">

    <Scheduler />
      </div>
    );
  }

} 
export default App;