import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import { Button, Icon } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Button animated>
        <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/inicio" exact component={() => <Home />} />
          <Route path="/series" exact component={() => <Series />} />
          <Route path="/comics" exact component={() => <Comics />} />
          <Route component={() => <Error404 />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
