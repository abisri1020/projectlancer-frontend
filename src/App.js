import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Projects} />
          <Route path="/posts/search" exact component={Projects} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to={Home}/>)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
