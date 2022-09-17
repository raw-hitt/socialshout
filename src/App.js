import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import mtheme from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles/';


//pages
import home from "./pages/home"
import signin from "./pages/signIn"
import signup from "./pages/signUp"
import create from "./pages/create"
import profile from "./pages/myProfile"
import edit from "./pages/editprofile"
import change from "./pages/changePassword"


//components from here
import Navbar from './components/navBar'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {


  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/login" component={signin} />
              <Route path="/signup" component={signup} />
              <Route path="/create" component={create} />
              <Route path="/profile" component={profile} />
              <Route path="/edit" component={edit} />
              <Route path="/change" component={change} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
