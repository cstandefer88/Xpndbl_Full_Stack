import React from 'react';


class Submit extends React.Component {

  constructor(props){
    super(props);
  }


  _handleSubmit(event){
    event.preventDefault();
    let date = this.props.date;
    let income = this.props.income;
    let categories = this.props.categories;
    let expenseItems = this.props.expenseItems;

    $.ajax({
      url: '/month',
      method: "POST",
      data: {
        date: date,
        income: income,
        categories: categories,
        expenseItems: expenseItems
      },
      dataType: 'json'
    })
    .done(function(data){
      console.log(data);
    }.bind(this));

  }

  render(){
    return(
      <div>
        <form id="resultsSave" onSubmit={ this._handleSubmit.bind(this) }>
          <input type="submit" value="Save Results" />
        </form>
      </div>
    );
  }
}


export default Submit;
