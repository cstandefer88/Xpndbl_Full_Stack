import React from 'react';
import DateIncome from './date-income';
import ExpenseForm from './expense-form';
import ResultsContainer from './results-container';


class NewMonth extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date: null,
      income: null,
      categories: [
        "Housing",
        "Utilities",
        "Food",
        "Clothing",
        "Transportation",
        "Medical and Health",
        "Insurance",
        "Personal",
        "Recreation",
        "Debt Payments"
      ],
      expenseItems: []
    }
  }


  _dateIncomeUpdate(date, income){
    this.setState({
      date: date,
      income: income
    })
  }


  _expenseUpdate(expense){
    const expenseItems = [
      expense,
      ...this.state.expenseItems
    ]
    this.setState({
      expenseItems: expenseItems
    })
  }


  render(){
    return(
      <div>
        <DateIncome dateIncomeUpdate={ this._dateIncomeUpdate.bind(this) } />
        <ExpenseForm expenseUpdate={ this._expenseUpdate.bind(this) } categories={ this.state.categories } />
        <ResultsContainer date={ this.state.date } income={ this.state.income } categories={ this.state.categories } expenseItems={ this.state.expenseItems } />
      </div>
    );
  }
}


export default NewMonth;
