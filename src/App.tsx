import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './layout/Header'
import { Footer } from './layout/Foter'
import { Home } from './pages/Home'
import { SingleMovie } from './pages/SingleMovie'

const App: React.FC = () => {
  return (
      <Router basename="/react-movie">
          <Header />
              <main className="container content">
                  <Switch>
                      <Route exact path='/' component={ Home } />
                      <Route path={'/movie/:id'} component={ SingleMovie } />
                  </Switch>
              </main>
          <Footer />
      </Router>
  );
};

export default App;