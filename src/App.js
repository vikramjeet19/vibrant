import React from 'react';
import Header from './Components/Header';
import List from './Components/List';
import Edit from './Components/Edit';
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div >
       <Header/>
       
       <Switch>
         <Route  exact path='/edit' component={Edit}/>
         <Route exact path='/' component={List} />
       </Switch>
    </div>
  );
}

export default App;
