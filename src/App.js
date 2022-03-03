import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Box from '@mui/material/Box';
import Home from "./components/Home";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import Segitiga from "./components/Segitiga";
import PersegiPanjang from "./components/PersegiPanjang";
import Lingkaran from "./components/Lingkaran";
import Data from "./components/Data";
import NilaiHuruf from "./components/NilaiHuruf";
import TableCustom from "./components/TableCustom";
import Crudjson from "./components/Crudjson";
import Crudjson2 from "./components/Crudjson2";
import BootsLand from "./components/BootsLand";

function App() {
  return (
    <>
      <Box>
        <Router >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/Counter">
              <Counter />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/segitiga">
              <Segitiga />
            </Route>
            <Route path="/persegipanjang">
              <PersegiPanjang />
            </Route>
            <Route path="/lingkaran">
              <Lingkaran />
            </Route>
            <Route path="/data">
              <Data />
            </Route>
            <Route path="/nilaihuruf">
              <NilaiHuruf />
            </Route>
            <Route path="/tablecustom">
              <TableCustom />
            </Route>
            <Route path="/crudjson">
              <Crudjson />
            </Route>
            <Route path="/crudjson2">
              <Crudjson2 />
            </Route>
            <Route path="/bootsland">
              <BootsLand />
            </Route>

          </Switch>
        </Router>
      </Box>
    </>
  );
}

export default App;
