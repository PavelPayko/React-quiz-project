import React from 'react';
// import classes from './App.module.css';
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Auth from './containers/Auth/Auth';
import { Switch, Route } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/quiz-creator' component={QuizCreator} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/' component={QuizList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
