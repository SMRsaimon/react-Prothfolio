
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import * as ReactNavbar from "react-responsive-animate-navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Work from './components/Work/Work';


function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Intro />
            <Work />
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
