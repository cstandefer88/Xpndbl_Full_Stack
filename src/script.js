import React from 'react';
import ReactDOM from 'react-dom';
import Xpndbl from './components/xpndbl';
import PastMonthsList from './components/past-months-list';

if (window.location.pathname === '/'){
  ReactDOM.render(<Xpndbl />, document.getElementById('app'));
} else if (window.location.pathname === '/month/pastmonths'){
  ReactDOM.render(<PastMonthsList />, document.getElementById('app-months'));
}
