import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Main from './pages/Main'
import CuisinePage from './pages/CuisinePage'

function App() {
  return (
    <div className="App">
      
        <Header />
        <Switch>
        <Route exact path='/'> 
          <Main />
        </Route>
        <Route path='/cuisine/:country'
        render={(routerProps)=> <CuisinePage {...routerProps}/>} //routerProps is a parameter, you can name it whatever you want!
      />
        </Switch>
      
    </div>
  );
}

export default App;
