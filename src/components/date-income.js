import React from 'react';


class DateIncome extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dateValue: '',
      incomeValue: ''
    }
  }


  _handleDateChange(event) {
    this.setState({
      dateValue: event.target.value
    });
  }


  _handleIncomeChange(event) {
    this.setState({
      incomeValue: event.target.value
    });
  }


  _handleInput(event) {
    event.preventDefault();
    this.update();
    this.setState({
      dateValue: '',
      incomeValue: ''
    })
  }


  update(){
    var date = this.refs.dateEntry.value;
    var income = this.refs.incomeEntry.value;
    this.props.dateIncomeUpdate(date, income);
  }


  render(){
    return(
      <div id="dateIncomeForm">
        <form onSubmit={this._handleInput.bind(this)}>
          <p className="monthEntry">Enter the date this form is for (month name and year): <br/>
          <input className="monthEntry" type="month" ref="dateEntry" name="date" value={this.state.dateValue} onChange={this._handleDateChange.bind(this)} />
          </p>

          <p className="incomeEntry">Enter your income for this past month: <br/>
          $<input className="incomeEntry" type="number" ref="incomeEntry" name="income" value={this.state.incomeValue} onChange={this._handleIncomeChange.bind(this)}/>
          </p>

          <div id="dateIncomeSubmit">
            <input type="submit" value="Submit to Results (Only Once)" />
          </div>
        </form>
      </div>
    );
  }
}


export default DateIncome;
