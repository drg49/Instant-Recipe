import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Main from './pages/Main'
import CuisinePage from './pages/CuisinePage'
import RecipePage from './pages/RecipePage'

function App() {
  return (
    <div className="App">
      
        <Header />
        <Switch>
        <Route exact path='/'> 
          <Main />
        </Route>
        <Route path='/cuisine/:country'
        render={(routerProps)=> <CuisinePage {...routerProps}/>}
        />
        <Route path='/recipe/:mealId'
        render={(routerProps)=> <RecipePage {...routerProps}/>} 
        />
        </Switch>
      
    </div>
  );
}

export default App;
