import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './layout/Header'
import { Footer } from './layout/Foter'
import { Home } from './pages/Home'
import { SingleMovie } from './pages/SingleMovie'
import { NotFound } from './pages/NotFound'

const App: React.FC = () => {
  return (
      <Router basename="/react-movies">
          <Header />
              <main className="container content">
                  <Switch>
                      <Route exact path='/' component={ Home } />
                      <Route path={'/movie/:id'} component={ SingleMovie } />
                      <Route component={ NotFound } />

                  </Switch>
              </main>
          <Footer />
      </Router>
  );
};

export default App;