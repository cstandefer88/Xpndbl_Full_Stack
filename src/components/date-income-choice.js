import React from 'react';


class DateIncomeChoice extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <h2>Income: ${ this.props.income }</h2>
      </div>
    );
  }
}


export default DateIncomeChoice;
