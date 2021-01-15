// GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
// Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetails";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs}></Route>
          <Route exact path="/work" component={OurWork}></Route>
          <Route path="/work/:id" component={MovieDetails}></Route>
          <Route path="/contact" component={ContactUs}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
