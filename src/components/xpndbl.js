import React from 'react';
import Nav from './nav';
import NewMonth from './new-month';

class Xpndbl extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <Nav />
        <NewMonth />
        <div id="footer">
          <p>&#169; 2016 Colin Standefer</p>
        </div>
      </div>
    );
  }
}


export default Xpndbl;
