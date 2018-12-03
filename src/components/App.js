import React, { Component } from 'react';
import NavBar from './NavBar';
import NavDrawer from './Nav-drawer';
import { Grid } from '@material-ui/core'


class App extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item>
            <NavDrawer />
          </Grid>
          <Grid item> 
             
          </Grid>
          
        </Grid>

        
      </div>
    );
  }
}

export default App;

