
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Work from './components/Work/Work';
import Blog from './components/Blog/Blog';
import Contract from './components/Contract/Contract';


function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Intro />
            <Work />
            <Contract />
            <Footer />

          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/work">
            <Header />
            <Work />
            <Footer />
          </Route>
          <Route path="/blog">
            <Header />
            <Blog />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contract />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
