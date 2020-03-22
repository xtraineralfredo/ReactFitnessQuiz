import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Quiz from './Quiz';
import About from './components/About';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/fitnessQuiz" exact component={Quiz}/>
      <Route path="/about" exact component={About}/>
      <Route path="/" render={() => <div>404</div>}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
