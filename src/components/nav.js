import React from 'react';

class Nav extends React.Component {

  constructor(props){
    super(props);
  }


  _logout() {
    $.ajax({
      url: '/logout',
      method: "GET"
    })
    .done(function(){

    }.bind(this));
    }

  _newMonth() {
    $.ajax({
      url: '/',
      method: "GET"
    })
    .done(function(){

    }.bind(this));
    }

  _pastMonths() {
    $.ajax({
      url: '/month/pastmonths',
      method: "GET"
    })
    .done(function(){

    }.bind(this));
    }

  render(){
    return(
      <div>
        <nav id="nav">
          <ul id="navList">
            <li onClick={ this._pastMonths.bind(this) } className="firstTwoLi"><a href="/month/pastmonths" title="Past Months">Past Months</a></li>
            <li onClick={ this._newMonth.bind(this) } className="firstTwoLi"><a href="/" title="New Month">New Month</a></li>
            <li onClick={ this._logout.bind(this) }><a href="/logout" title="Logout">Logout</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}


export default Nav;
