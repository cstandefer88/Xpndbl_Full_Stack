import React from 'react';
import Nav from './nav';

class PastMonthsList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      months: []
    }
  }


  componentWillMount() {
    $.ajax({
      url: '/month/pastmonths/dates',
      method: "GET"
    })
    .done(function(response){
      var newArray = [];
      for (var i = 0; i < response.length; i++) {
        newArray.push(response[i]);
      }
      this.setState({
        months: newArray
      })
    }.bind(this));
    console.log(this.state.months);
  }

  render(){
    return(
      <div>
        <Nav />
        <h1>Past Months</h1>
        { this.state.months.map(function(month, i) {
          return (
            <ul key={ i } id="pastMonthsList">
              <li id="pastMonthsListItems"><a href={ "/month/pastmonths/" + month._id }>{ month.date }</a></li>
            </ul>
          )
        })
        }
      </div>
    );
  }
}


export default PastMonthsList;
