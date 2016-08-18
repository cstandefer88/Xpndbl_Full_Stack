import React from 'react';


class ExpenseForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      descriptorValue: '',
      amountValue: ''
    }
  }

  _handleTextChange(event) {
    this.setState({
      descriptorValue: event.target.value
    });
  }

  _handleNumberChange(event) {
    this.setState({
      amountValue: event.target.value
    });
  }


  _update(){
    var category = this.refs.categoryEntry.value;
    var descriptor = this.refs.descriptorEntry.value;
    var amount = this.refs.amountEntry.value;
    var expense = { category, descriptor, amount }
    this.props.expenseUpdate(expense);
  }


  _handleInput(event) {
    event.preventDefault();
    this._update();
    this.setState({
      descriptorValue: '',
      amountValue: ''
    })
  }


  _renderCategoryOption(category) {
    return <option key={category} value={category}>{category}</option>
  }
  render(){
    return(
      <div id="expenseForm">

        <form onSubmit={this._handleInput.bind(this)}>
          <div>
            <p className="categoryEntry">Pick the category of your purchase: <br/>
            <select className="categoryEntry" ref="categoryEntry" defaultValue="null">
              { this.props.categories.map(this._renderCategoryOption)}
            </select>
            </p>
          </div>

          <p className="amountEntry">Enter the amount for this purchase: <br/>
          $<input className="amountEntry" type="number" ref="amountEntry" name="amount" value={this.state.amountValue} onChange={this._handleNumberChange.bind(this)} />
          </p>

          <p className="purchaseEntry">What was the purchase? <br/>
          <textarea className="purchaseEntry" rows="4" cols="50" ref="descriptorEntry" value={this.state.descriptorValue} onChange={this._handleTextChange.bind(this)}></textarea>
          </p>

          <div id="expenseSubmit">
            <input id="expenseSubmit" type="submit" value="Submit To Results" />
          </div>
        </form>

      </div>
    );
  }
}


export default ExpenseForm;
