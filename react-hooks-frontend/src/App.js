import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
    <Router>
    <HeaderComponent/>
      <div className = "container">
        <Switch>
            <Route path = "/" component = {ListEmployeeComponent}></Route>
            <Route path = "/employees" component = {ListEmployeeComponent}></Route>
        </Switch>
       </div>
       <FooterComponent/>
       </Router>
    </div>
  );
}

export default App;
