import React from 'react';


class ExpenseFormChoice extends React.Component {

  constructor(props){
    super(props);
  }


  _renderExpenseItemRow(expenseItem, i) {
    return (
      <tr key={i}>
        <td>${ expenseItem.amount }</td>
        <td>{ expenseItem.descriptor }</td>
      </tr>
    )
  }

  _renderCategoryTable(category){
    var expenseItems = this.props.expenseItems.filter((expenseItem) => {
      return expenseItem.category === category
    });

    if (expenseItems.length > 0) {
      return (
        <table key={category}>
          <thead>
            <tr>
              <th colSpan="2">{category}</th>
            </tr>
          </thead>
          <tbody>
            { expenseItems.map(this._renderExpenseItemRow) }
          </tbody>
        </table>
      )
    }
  }

  render(){

    return(
      <div>
        { this.props.categories.map(this._renderCategoryTable.bind(this)) }
      </div>
    );
  }
}


export default ExpenseFormChoice;
